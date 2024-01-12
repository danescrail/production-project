import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticlesPageFilters.module.scss';
import { memo, useCallback } from "react";
import { ArticleTypeTabs, ArticleView, ArticleViewSelector } from "entities/Article";
import { useSelector } from "react-redux";
import { getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView } from "pages/ArticlePage/model/selectors/articlesPageSelectors";
import { useAppDispatch } from "app/providers/StoreProvider/config/hooks";
import { articlesPageActions } from "pages/ArticlePage/model/slices/articlesPageSlice";
import { useTranslation } from "react-i18next";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";
import { ArticleSortSelector } from "entities/Article/ui/ArticleSortSelector/ArticleSortSelector";
import { ArticleSortField, ArticleType } from "entities/Article/model/types/article";
import { SortOrder } from "shared/types";
import { fetchArticlesList } from "pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo(({ className }: ArticlesPageFiltersProps) => {
    const view = useSelector(getArticlesPageView);
    const dispatch = useAppDispatch();
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);
    const { t } = useTranslation('articles');

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(articlesPageActions.setType(value as ArticleType));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className!])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card>
                <Input
                    placeholder={t('Поиск')}
                    onChange={onChangeSearch}
                    value={search}
                />
            </Card>
            <ArticleTypeTabs value={type} onChangeType={onChangeType} className={cls.tabs}/>
        </div>
    )
})
