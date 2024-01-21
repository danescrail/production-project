import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticleDetailsPageHeader.module.scss';
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getCanEditArticle } from "pages/ArticleDetailsPage/model/selectors/article";
import { getArticleDetailsData } from "entities/Article";

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
    const navigate = useNavigate();
    const { t } = useTranslation('article');
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.articles_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className!])}>
            <Button theme={ThemeButton.OUTLINE_INVERTED} onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            {canEdit && <Button theme={ThemeButton.OUTLINE_INVERTED} onClick={onEditArticle} className={cls.editBtn}>
                {t('Редактировать')}
            </Button>}
        </div>
    )
})
