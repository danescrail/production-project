import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { ProfileCard, fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, getProfileValidateErrors, profileActions, profileReducer } from "entities/Profile";
import { useCallback } from "react";
import { useAppDispatch } from "app/providers/StoreProvider/config/hooks";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { ValidateProfileError } from "entities/Profile/model/types/profile";
import { useTranslation } from "react-i18next";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useParams } from "react-router-dom";
import { Page } from "widgets/Page/ui/Page";

const reducers: ReducerList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');
    const error = useSelector(getProfileError);
    const validateErrors = useSelector(getProfileValidateErrors);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const formData = useSelector(getProfileForm);
    const { id } = useParams<{ id: string }>()

    const validateErrorTranslate = {
        [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
        [ValidateProfileError.NO_DATA]: t('Не указаны данные'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный выбор страны'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Некорректное имя и фамилия пользователя'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст')
    }

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }))
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }))
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }))
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }))
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency: currency || Currency.RUB }))
    }, [dispatch]);

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({ country: country || Country.Russia }))
    }, [dispatch]);

    return (

        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames('', {}, [className!])}>
                <ProfilePageHeader />
                {validateErrors?.length && validateErrors.map((err) => (
                    <Text theme={TextTheme.ERROR} text={validateErrorTranslate[err]} key={err} />
                ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    readonly={readonly}
                />
            </Page>
        </DynamicModuleLoader>
    )
}

export default ProfilePage;