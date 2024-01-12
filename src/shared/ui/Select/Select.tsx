import { Mods, classNames } from "shared/lib/classNames/classNames";
import cls from './Select.module.scss';
import { ChangeEvent, useMemo } from "react";

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: Array<SelectOption<T>>;
    value?: string;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        onChange,
        value,
        readonly
    } = props;

    const mods: Mods = {

    }

    const optionsList = useMemo(() => {
        return options?.map(item => (
            <option value={item.value} key={item.value}>{item.content}</option>
        ));
    }, [options])

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    }

    return (
        <div className={classNames(cls.Wrapper, mods, [className!])}>
            {label && (
                <span className={cls.label}>{label}</span>
            )}
            <select className={cls.select} value={value} onChange={onChangeHandler} disabled={readonly}>
                {optionsList}
            </select>
        </div>
    )
};
