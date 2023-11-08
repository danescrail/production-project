import React from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from 'shared/assets/about-20-20.svg';
import MainIcon from 'shared/assets/main-20-20.svg';
import ProfileIcon from 'shared/assets/profile-20-20.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        icon: MainIcon,
        text: 'Главная'
    },
    {
        path: RoutePath.about,
        icon: AboutIcon,
        text: 'О сайте'
    },
    {
        path: RoutePath.profile,
        icon: ProfileIcon,
        text: 'Профиль'
    }
]