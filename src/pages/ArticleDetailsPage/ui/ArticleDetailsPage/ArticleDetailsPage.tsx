import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticleDetailsPage.module.scss';
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ArticleDetails, ArticleList } from "entities/Article";
import { useParams } from "react-router-dom";
import { Text, TextSize, TextTheme } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { getArticleComments } from "../../model/slices/articleDetailsCommentSlice";
import { useSelector } from "react-redux";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsArticleById } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { useAppDispatch } from "app/providers/StoreProvider/config/hooks";
import { AddCommentForm } from "features/AddNewComment";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { Page } from "widgets/Page/ui/Page";
import { getArticleRecommendations } from "../../model/slices/articleDetailsRecommendationSlice";
import { getArticleRecommendationsIsLoading } from "../../model/selectors/recommendations";
import { fetchArticlesRecommendations } from "../../model/services/fetchArticlesRecommendations/fetchArticlesRecommendations";
import { articleDetailsPageReducer } from "../../model/slices";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";

interface ArticleDetailsPageProps {
    className?: string;
    id?: string;
    isLoading?: boolean;
}

const reducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = ({ className, isLoading }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchCommentsArticleById(id));
            dispatch(fetchArticlesRecommendations());
        }
    });

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className!])}>
                {t('Статья не найдена')}
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className!])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <Text size={TextSize.L} className={cls.commentTitle} title={t('Рекомендуем')} />
                <ArticleList articles={recommendations} isLoading={recommendationsIsLoading} className={cls.recommendations} target={'_blank'}/>
                <Text title={t('Комментарии')} theme={TextTheme.PRIMARY} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList isLoading={commentsIsLoading} comments={comments} />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage);