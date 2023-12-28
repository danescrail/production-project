import { classNames } from "shared/lib/classNames/classNames";
import cls from './NotFoundPage.module.scss';
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/ui/Page";

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation('translation');
    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className!])}>
            {t('Страница не найдена')}
        </Page>
    )
}

export default NotFoundPage;