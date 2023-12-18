import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { ProfileCard } from './ProfileCard';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import AvatarImg from 'shared/assets/tests/3b2758ad5492a76b578f7ee072e4e894.jpg'

const meta = {
    title: 'entities/ProfileCard', // Указываем где находится папка с кнопкой
    component: ProfileCard, // Какой компонент проверяем
    parameters: {},
    argTypes: {}
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data: {
            username: 'admin',
            age: 23,
            country: Country.Russia,
            lastname: 'Kanila',
            first: 'Danila',
            city: 'Moscow',
            currency: Currency.RUB,
            avatar: AvatarImg
        }
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const WithError: Story = {
    args: {
        error: 'true'
    }
}

export const Loading: Story = {
    args: {
        isLoading: true
    }
}