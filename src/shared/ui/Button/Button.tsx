import { classNames } from "shared/lib/classNames/classNames";
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    PRIMARY = 'primary',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted'
}

export enum SizeButton {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: SizeButton;
    disabled?: boolean;
}

// Button
export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
        square, // Делаем возможным сделать квадратную кнопку
        disabled,
        size = SizeButton.M, // Передаем настраиваемые размеры кнопки, заведомо настроенные в scss файлике
        ...otherProps
    } = props;

    const mods: Record<string, boolean | string | undefined> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: size,
        [cls.disabled]: disabled
    }

    return (
        <button className={classNames(cls.Button, mods, [className!, cls[theme]])} disabled={disabled} {...otherProps}>
            {children}
        </button>
    )
}
