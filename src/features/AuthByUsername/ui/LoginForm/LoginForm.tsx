import { classNames } from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss';
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation('translation');
    return (
        <div className={classNames(cls.LoginForm, {}, [className!])}>
            <Input type="text" className={cls.input} placeholder={t('Введите имя пользователя')} autofocus/>
            <Input type="text" className={cls.input} placeholder={t('Введите пароль')}/>
            <Button className={cls.loginBtn} theme={ThemeButton.CLEAR_INVERTED}>
                {t('Войти')}
            </Button>
        </div>
    )
}
