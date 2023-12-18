import { classNames } from "shared/lib/classNames/classNames";
import cls from './Code.module.scss';
import { memo, useCallback } from "react";
import { Button, ThemeButton } from "../Button/Button";
import CopyIcon from 'shared/assets/copy-20-20.svg';
import { Icon } from "shared/ui/Icon/Icon";

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);
    return (
        <pre className={classNames(cls.Code, {}, [className!])}>
            <Button className={cls.copyBtn} theme={ThemeButton.CLEAR} onClick={onCopy}><Icon Svg={CopyIcon} /></Button>
            <code>
                {text}
            </code>
        </pre>
    )
})
