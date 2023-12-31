import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/Select/Select";
import { Country } from "../../model/types/country";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine }
]

export const CountrySelect = ({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation('translation');

    const onChangeHandler = useCallback((value: string) => {
        if (onChange) {
            onChange(value as Country)
        }
    }, [onChange]);

    return (
        <Select className={classNames('', {}, [className!])}
            label={t('Укажите страну')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    )
}
