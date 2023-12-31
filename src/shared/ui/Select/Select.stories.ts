import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Select } from './Select';

const meta = {
    title: 'shared/Select', // Указываем где находится папка с кнопкой
    component: Select, // Какой компонент проверяем
    parameters: {},
    argTypes: {}
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        label: 'Укажите значение',
        options: [
            { value: '1', content: 'первый пунт' },
            { value: '2', content: 'второй пунт' }
        ]
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
}