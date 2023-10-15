import { classNames } from "shared/lib/classNames/classNames";
import cls from './PageError.module.scss';
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

interface PageErrorProps {
    className?: string;
}

const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation('translation');

    const reloadPage = () => {
        location.reload();
    }

    return (
        <div className={classNames(cls.PageError, {}, [className!])}>
            {t('Произошла не предвиденная ошибка')}
            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    )
}

export default PageError;