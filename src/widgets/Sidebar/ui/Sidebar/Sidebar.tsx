import { classNames } from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import { useState } from "react";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div data-testid='sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className!])}>
            <Button onClick={onToggle} theme={ThemeButton.PRIMARY} data-testid='sidebar-toggle'></Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
}
