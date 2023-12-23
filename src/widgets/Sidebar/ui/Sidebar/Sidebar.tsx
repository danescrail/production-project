import { classNames } from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import { useMemo, useState } from "react";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { useSelector } from "react-redux";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    const itemsList = useMemo(() => {
        return (sidebarItemsList.map((item) => (
            <SidebarItem item={item} collapsed={collapsed} key={item.path} />
        )))
    }, [collapsed, sidebarItemsList]);

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
                {itemsList}
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
