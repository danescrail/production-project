import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import ProfilePage from './ProfilePage'
import AvatarImg from 'shared/assets/tests/3b2758ad5492a76b578f7ee072e4e894.jpg'
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'page/ProfilePage', // Указываем где находится папка с кнопкой
    component: ProfilePage, // Какой компонент проверяем
    parameters: {},
    argTypes: {}
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 22,
                country: Country.Russia,
                lastname: 'Kovalev',
                first: 'Danila',
                city: 'Moscow',
                currency: Currency.RUB,
                avatar: AvatarImg
            }
        }
    })]
}

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 22,
                country: Country.Russia,
                lastname: 'Kovalev',
                first: 'Danila',
                city: 'Moscow',
                currency: Currency.RUB,
                avatar: AvatarImg
            }
        }
    })]
}