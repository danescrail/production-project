import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticleList.module.scss';
import { HTMLAttributeAnchorTarget, memo } from "react";
import { Article, ArticleView } from "entities/Article/model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton key={index} view={view} />
        ));
}
export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view,
        target
        = ArticleView.SMALL
    } = props;

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem article={article} view={view!} className={cls.card} key={article.id} target={target} />
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className!, cls[view!]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null
            }
            {isLoading && getSkeletons(view!)}
        </div>
    )
})
