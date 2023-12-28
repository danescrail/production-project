// import { BugButton } from "app/providers/ErrorBoundary";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { Page } from "widgets/Page/ui/Page";

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    }

    return (
        <Page>
            <Input onChange={onChange} value={value} placeholder="Введите текст" />
            {t('Главная страница')}
        </Page>
    )
}

export default MainPage;