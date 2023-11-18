import { Mods, classNames } from "shared/lib/classNames/classNames";
import cls from './Select.module.scss';

interface SelectProps {
    className?: string;
    label?: string;
}

export const Select = (props: SelectProps) => {
    const {
        className,
        label
    } = props;
    const mods: Mods = {

    }
    return (
        <div className={classNames(cls.Wrapper, mods, [className!])}>
            {label && (
                <span className={cls.label}>{label}</span>
            )}
            <select className={cls.select}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </div>
    )
}
