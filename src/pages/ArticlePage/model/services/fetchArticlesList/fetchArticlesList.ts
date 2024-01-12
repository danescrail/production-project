// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType } from '../../selectors/articlesPageSelectors';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import { ArticleType } from 'entities/Article/model/types/article';

interface fetchArticlesListProps {
    page?: number;
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], fetchArticlesListProps, ThunkConfig>(
    'articlesPage/fetchArticlesList',
    async (props, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const { page = 1 } = props;
        const limit = getArticlesPageLimit(getState());
        const sort = getArticlesPageSort(getState());
        const order = getArticlesPageOrder(getState());
        const search = getArticlesPageSearch(getState());
        const type = getArticlesPageType(getState());

        try {
            addQueryParams({ sort, order, search, type })
            const response = await extra.api!.get<Article[]>(`/articles`, {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    _type: type === ArticleType.ALL ? undefined : type,
                    q: search
                }
            })

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue([]);
        }
    }
);
