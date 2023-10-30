import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Input } from './Input'

const meta = {
    title: 'shared/Input', // Указываем где находится папка с кнопкой
    component: Input, // Какой компонент проверяем
    parameters: {},
    argTypes: {}
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        placeholder: 'Введите текст'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
    args: {
        placeholder: 'Введите текст'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}