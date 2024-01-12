import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'
import { Article } from 'entities/Article'
import { fetchArticlesRecommendations } from '../services/fetchArticlesRecommendations/fetchArticlesRecommendations'

const recommendationAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id
})

export const getArticleRecommendations = recommendationAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationAdapter.getInitialState()
)

const articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendationsSlice',
    initialState: recommendationAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesRecommendations.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;
            })

            .addCase(fetchArticlesRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendationAdapter.setAll(state, action.payload);
            })

            .addCase(fetchArticlesRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = 'error';
            })
    }
})

export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsRecommendationsSlice;