import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from 'shared/assets/about-20-20.svg';
import MainIcon from 'shared/assets/main-20-20.svg';
import ProfileIcon from 'shared/assets/profile-20-20.svg';
import ArticleIcon from 'shared/assets/article-20-20.svg';
import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { SidebarItemType } from "../types/sidebar";

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const SidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                icon: MainIcon,
                text: 'Главная'
            },
            {
                path: RoutePath.about,
                icon: AboutIcon,
                text: 'О сайте'
            }
        ];

        if (userData) {
            SidebarItemsList.push(
                {
                    path: RoutePath.profile + userData?.id,
                    icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true
                },
                {
                    path: RoutePath.articles,
                    icon: ArticleIcon,
                    text: 'Статья',
                    authOnly: true
                })
        }

        return SidebarItemsList;
    }
)
