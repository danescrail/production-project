// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { ArticleSortField } from 'pages/ArticlePage';
import { SortOrder } from 'shared/types';

const setParam = (param: string | null, callback: () => void) => {
    if (param) {
        callback();
    }
}

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            const sortFromUrl = searchParams.get('sort') as ArticleSortField;
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const searchFromUrl = searchParams.get('search') as string | '';

            setParam(orderFromUrl, () => dispatch(articlesPageActions.setOrder(orderFromUrl)));
            setParam(sortFromUrl, () => dispatch(articlesPageActions.setSort(sortFromUrl)));
            setParam(searchFromUrl, () => dispatch(articlesPageActions.setSearch(searchFromUrl)));

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({
                page: 1
            }));
        }
    }
);
