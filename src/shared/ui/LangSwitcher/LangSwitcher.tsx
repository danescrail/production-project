import { classNames } from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss';
import { Button } from "../Button/Button";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
    className: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={toggleLanguage}
        >
            {t('Язык')}
        </Button>
    )
}
