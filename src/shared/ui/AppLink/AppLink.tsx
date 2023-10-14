import { classNames } from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss';
import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
    const { to, children, className, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;
    return (
        <Link className={classNames(cls.AppLink, {}, [className!, cls[theme]])} to={to} {...otherProps}>
            {children}
        </Link>
    )
}

export default AppLink;