import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "../Button/Button";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button
            className={classNames('', {}, [className!])}
            onClick={toggleLanguage}
            theme={ThemeButton.CLEAR_INVERTED}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    )
});