/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userAction } from "entities/User";

interface NavbarProps {
    className?: string;
}

const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation('translation');
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userAction.logout());
    }, [dispatch]);

    if (authData) {
        return (<header className={classNames(cls.Navbar, {}, [className!])}>
            <Button
                theme={ThemeButton.OUTLINE_INVERTED}
                className={cls.links}
                onClick={onLogout}
            >
                {t('Выйти')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </header>
        )
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className!])}>
            <Button
                theme={ThemeButton.OUTLINE_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />)}
        </header>
    )
});

export default Navbar;