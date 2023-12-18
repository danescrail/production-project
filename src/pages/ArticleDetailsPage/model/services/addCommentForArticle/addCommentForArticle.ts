// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosInstance } from 'axios';
import { AnyAction, Dispatch, createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import { fetchCommentsArticleById } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, (
{
    rejectValue: string,
    extra: ThunkExtraArg,
    state: StateSchema,
    dispatch?: Dispatch<AnyAction>
})>(
    'articleDetails/addCommentForArticle',
    async (text, thunkApi) => {
        const { extra, dispatch, rejectWithValue, getState } = thunkApi;

        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api!.post<Comment>('/comments', {
                articleId: article?.id,
                userId: userData.id,
                text
            });

            dispatch(fetchCommentsArticleById(article.id))

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    }
    );