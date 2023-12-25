import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticleDetailsPage.module.scss';
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ArticleDetails } from "entities/Article";
import { useNavigate, useParams } from "react-router-dom";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsCommentsReducer, getArticleComments } from "../model/slices/articleDetailsCommentSlice";
import { useSelector } from "react-redux";
import { getArticleCommentsIsLoading } from "../model/selectors/comments";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsArticleById } from "../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { useAppDispatch } from "app/providers/StoreProvider/config/hooks";
import { AddCommentForm } from "features/AddNewComment";
import { addCommentForArticle } from "../model/services/addCommentForArticle/addCommentForArticle";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Page } from "shared/ui/Page/Page";

interface ArticleDetailsPageProps {
    className?: string;
    id?: string;
    isLoading?: boolean;
}

const reducers: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage = ({ className, isLoading }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchCommentsArticleById(id));
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
                <Button theme={ThemeButton.OUTLINE_INVERTED} onClick={onBackToList}>
                    {t('Назад к списку')}
                </Button>
                <ArticleDetails id={id} />
                <Text title={t('Комментарии')} theme={TextTheme.PRIMARY}/>
                <AddCommentForm onSendComment={onSendComment}/>
                <CommentList isLoading={commentsIsLoading} comments={comments} />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage);