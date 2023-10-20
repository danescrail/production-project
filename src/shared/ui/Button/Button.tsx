import { classNames } from "shared/lib/classNames/classNames";
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
    CLEAR = 'clear',
    PRIMARY = 'primary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

// Button
export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme = ThemeButton.CLEAR, ...otherProps } = props;
    return (
        <button className={classNames(cls.Button, {}, [className!, cls[theme]])} {...otherProps}>
            {children}
        </button>
    )
}
