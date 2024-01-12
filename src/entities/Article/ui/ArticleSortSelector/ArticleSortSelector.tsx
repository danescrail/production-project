import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticleSortSelector.module.scss';
import { memo, useMemo } from "react";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { useTranslation } from "react-i18next";
import { ArticleSortField } from "entities/Article/model/types/article";
import { SortOrder } from "shared/types";
import { useSelector } from "react-redux";
import { getArticlesPageOrder, getArticlesPageSort } from "pages/ArticlePage/model/selectors/articlesPageSelectors";

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo(({ className, onChangeSort, onChangeOrder }: ArticleSortSelectorProps) => {
    const { t } = useTranslation('article');
    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(() => [
        {
            value: 'asc',
            content: t('По возрастанию')
        },
        {
            value: 'desc',
            content: t('По убыванию')
        }
    ], [t]);
    const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания')
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию')
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам')
        }
    ], [t]);
    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className!])}>
            <Select label={t('Сортировать ПО')} options={sortFieldOptions} value={sort} onChange={onChangeSort}/>
            <Select label={t('по')} options={orderOptions} value={order} onChange={onChangeOrder} className={cls.order}/>
        </div>
    )
})
