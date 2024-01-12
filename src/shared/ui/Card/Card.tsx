import { classNames } from "shared/lib/classNames/classNames";
import cls from './Card.module.scss';
import { HTMLAttributes, ReactNode, memo } from "react";

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
}

export const Card = memo((props: CardProps) => {
    const { className, children, theme = CardTheme.NORMAL, ...otherProps } = props;
    return (
        <div className={classNames(cls.Card, {}, [className!, theme!])} {...otherProps}>
            {children}
        </div>
    )
})
