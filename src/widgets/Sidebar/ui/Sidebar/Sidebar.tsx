import { classNames } from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import { useState } from "react";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import AppLink from "shared/ui/AppLink/AppLink";
import AboutIcon from 'shared/assets/about-20-20.svg';
import MainIcon from 'shared/assets/main-20-20.svg';
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation('translation');

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div data-testid='sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className!])}>
            <Button
                onClick={onToggle}
                theme={ThemeButton.BACKGROUND_INVERTED}
                data-testid='sidebar-toggle'
                className={cls.collapsedBtn}
                square
                size={SizeButton.XL}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <div className={cls.item}>
                    <AppLink to={RoutePath.main}>
                        <MainIcon className={cls.icon} />
                        <span className={cls.link}>{t('Главная')}</span>
                    </AppLink>
                </div>
                <div className={cls.item}>
                    <AppLink to={RoutePath.about}>
                        <AboutIcon className={cls.icon} />
                        <span className={cls.link}>{t('О сайте')}</span>
                    </AppLink>
                </div>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={cls.lang}
                    short={collapsed} />
            </div>
        </div>
    );
}
