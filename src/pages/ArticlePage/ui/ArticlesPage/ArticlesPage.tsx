import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticlesPage.module.scss';
import { memo, useCallback } from "react";
import { ArticleList } from "entities/Article";
import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articlesPageReducer, getArticles } from "../../model/slices/articlesPageSlice";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "app/providers/StoreProvider/config/hooks";
import { useSelector } from "react-redux";
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from "../../model/selectors/articlesPageSelectors";
import { Page } from "widgets/Page/ui/Page";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { Text } from "shared/ui/Text/Text";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";
import { useSearchParams } from "react-router-dom";

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articlesPage: articlesPageReducer
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const [searchParams] = useSearchParams();

    // const onChangeView = useCallback((view: ArticleView) => {
    //     dispatch(articlesPageActions.setView(view))
    // }, [dispatch])

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        <Page className={classNames(cls.ArticlePage, {}, [className!])}>
            <Text text={'Ошибка загрузки статей'} />
        </Page>
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page className={classNames(cls.ArticlePage, {}, [className!])} onScrollEnd={onLoadNextPart}>
                <ArticlesPageFilters />
                <ArticleList
                    view={view}
                    isLoading={isLoading}
                    articles={articles}
                    className={cls.list}
                />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage);
