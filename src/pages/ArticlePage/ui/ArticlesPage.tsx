import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticlesPage.module.scss';
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ArticleList, ArticleView, ArticleViewSelector } from "entities/Article";
import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articlesPageActions, articlesPageReducer, getArticles } from "../model/slices/articlesPageSlice";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "app/providers/StoreProvider/config/hooks";
import { fetchArticlesList } from "../model/services/fetchArticlesList";
import { useSelector } from "react-redux";
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from "../model/selectors/articlesPageSelectors";

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articlesPage: articlesPageReducer
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('articles_list');
    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view))
    }, [dispatch])

    console.log(view);
    useInitialEffect(() => {
        dispatch(fetchArticlesList());
        dispatch(articlesPageActions.initState());
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticlePage, {}, [className!])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView}/>
                <ArticleList
                    view={view}
                    isLoading={isLoading}
                    articles={articles}
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage);
