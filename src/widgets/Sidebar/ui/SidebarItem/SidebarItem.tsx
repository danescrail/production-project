import cls from './SidebarItem.module.scss';
import AppLink from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { SidebarItemType } from '../../model/Item';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation('translation');
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <div className={cls.item}>
            <AppLink to={item.path} className={classNames(cls.item, { [cls.collapsed]: collapsed })}>
                <item.icon className={cls.icon} />
                <span className={cls.link}>{t(item.text)}</span>
            </AppLink>
        </div>
    )
});
