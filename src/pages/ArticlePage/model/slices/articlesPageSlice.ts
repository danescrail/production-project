import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Article, ArticleView } from 'entities/Article'
import { ArticlesPageSchema } from '../types/articlesPageSchema'
import { fetchArticlesList } from '../services/fetchArticlesList'
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state: StateSchema) => state.articlesPage || articlesAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.BIG
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        initState: state => {
            state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;
            })

            .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
                articlesAdapter.setAll(state, action.payload);
            })

            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = 'error';
            })
    }
})

export const {
    reducer: articlesPageReducer,
    actions: articlesPageActions
} = articlesPageSlice;
export default articlesPageSlice;