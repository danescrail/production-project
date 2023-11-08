import { classNames } from "shared/lib/classNames/classNames";
import { useTheme, Theme } from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/theme-dark.svg';
import DarkIcon from 'shared/assets/theme-light.svg';

import { ThemeButton, Button } from "shared/ui/Button/Button";
import { memo } from "react";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button className={classNames('', {}, [className!])} onClick={toggleTheme} theme={ThemeButton.CLEAR}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
});