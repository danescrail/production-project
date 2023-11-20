import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { CountrySelect } from './CountrySelect';

const meta = {
    title: 'entities/CountrySelect', // Указываем где находится папка с кнопкой
    component: CountrySelect, // Какой компонент проверяем
    parameters: {},
    argTypes: {}
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
}