import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import AppLink from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('translation');
    return (
        <div className={classNames(cls.Navbar, {}, [className!])}>
            <div className={cls.links}>
                <AppLink to={'/'} className={cls.mainLink}>{t('Главная')}</AppLink>
                <AppLink to={'/about'}>{t('О сайте')}</AppLink>
            </div>
        </div>
    )
}

export default Navbar;