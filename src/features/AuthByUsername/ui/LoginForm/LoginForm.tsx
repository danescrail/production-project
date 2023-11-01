import { classNames } from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss';
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { memo, useCallback } from "react";
import { loginActions } from "features/AuthByUsername/model/slice/loginSlice";
import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { useAppDispatch, useAppSelector } from "app/providers/StoreProvider/config/hooks";
import { Text, TextTheme } from "shared/ui/Text/Text";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation('translation');
    const dispatch = useAppDispatch();
    const loginState = useAppSelector(getLoginState);

    const error = loginState?.error;
    const username = loginState?.username;
    const password = loginState?.password;
    const isLoading = loginState?.isLoading;

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        if (username && password) {
            dispatch(loginByUsername({ username, password }));
        }
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className!])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите имя пользователя')}
                autofocus onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                theme={ThemeButton.CLEAR_INVERTED}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    )
});
