import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { CurrencySelect } from './CurrencySelect';

const meta = {
    title: 'entities/CurrencySelect', // Указываем где находится папка с кнопкой
    component: CurrencySelect, // Какой компонент проверяем
    parameters: {},
    argTypes: {}
} satisfies Meta<typeof CurrencySelect>;

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