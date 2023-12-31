import { classNames } from "shared/lib/classNames/classNames";
import cls from './ProfilePageHeader.module.scss';
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import { useSelector } from "react-redux";
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from "entities/Profile";
import { useCallback } from "react";
import { useAppDispatch } from "app/providers/StoreProvider/config/hooks";
import { getUserAuthData } from "entities/User";

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        className
    } = props;

    const { t } = useTranslation('profile');

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
        onCancelEdit();
    }, [dispatch, onCancelEdit]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className!])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <div className={cls.btnsWrapper}>
                    {readonly
                        ? (
                            <Button
                                theme={ThemeButton.OUTLINE}
                                className={cls.editBtn}
                                onClick={onEdit}
                            >
                                {t('Редактировать')}
                            </Button>
                        )
                        : (
                            <>
                                <Button
                                    theme={ThemeButton.OUTLINE_RED}
                                    className={cls.editBtn}
                                    onClick={onCancelEdit}
                                >
                                    {t('Отменить')}
                                </Button>
                                < Button
                                    theme={ThemeButton.OUTLINE}
                                    className={cls.saveBtn}
                                    onClick={onSave}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </>
                        )
                    }
                </div>
            )}
        </div >
    )
}
