import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Sidebar } from 'widgets/Sidebar';

const meta = {
    title: 'widets/Sidebar', // Указываем где находится папка с кнопкой
    component: Sidebar, // Какой компонент проверяем
    parameters: {},
    argTypes: {}
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        user: { authData: { id: '1', username: '123' } }
    })]
}

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        user: { authData: { id: '1', username: '123' } }
    })]
}

export const NoAuth: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        user: {}
    })]
}