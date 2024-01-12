import { classNames } from "shared/lib/classNames/classNames";
import cls from './Page.module.scss';
import { MutableRefObject, ReactNode, UIEvent, memo, useRef } from "react";
import { useInfiniteScroll } from "shared/lib/hooks/useInfinityScroll/useInfiniteScroll";
import { useAppDispatch } from "app/providers/StoreProvider/config/hooks";
import { getScrollSavePath, scrollSaveActions } from "features/ScrollSave";
import { useLocation } from "react-router-dom";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useSelector } from "react-redux";
import { StateSchema } from "app/providers/StoreProvider";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector(
        (state: StateSchema) => getScrollSavePath(state, pathname)
    );

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname
        }))
    }, 500);

    return (
        <>
            <section
                ref={wrapperRef}
                className={classNames(cls.Page, {}, [className!])}
                onScroll={onScroll}
            >
                {children}
                {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
            </section>
        </>
    )
});