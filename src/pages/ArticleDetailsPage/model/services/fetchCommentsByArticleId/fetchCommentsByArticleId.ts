// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

export const fetchCommentsArticleById = createAsyncThunk<Comment[], string, ThunkConfig>(
    'article/fetchCommentsArticleById',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        if (!articleId) {
            return rejectWithValue([]);
        }

        try {
            const response = await extra.api!.get<Comment[]>(`/comments`, {
                params: { articleId, _expand: 'user' }
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
