import { classNames } from "shared/lib/classNames/classNames";
import cls from './Skeleton.module.scss';
import { CSSProperties, memo } from "react";

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
    center?: boolean;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        height,
        width,
        border,
        center
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
        margin: center ? '15px auto 0px auto' : undefined
    }

    return (
        <div className={classNames(cls.Skeleton, {}, [className!])} style={styles}>
        </div>
    )
})
