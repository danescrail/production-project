import { classNames } from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/theme-dark.svg';
import DarkIcon from 'shared/assets/theme-light.svg';
import { Theme } from "app/providers/ThemeProvider";
import { ThemeButton, Button } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();
    return (
        <Button className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme} theme={ThemeButton.CLEAR}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}
