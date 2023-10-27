/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";
import { Modal } from "shared/ui/Modal/Modal";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('translation');
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev);
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [className!])}>
            <Button
                theme={ThemeButton.BACKGROUND}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>fdssFSfsDSFSDsFSDFSFSDFSDFSD</Modal>
        </div>
    )
}

export default Navbar;