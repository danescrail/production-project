import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { LoginModal } from './LoginModal';

const meta = {
    title: 'features/LoginModal', // Указываем где находится папка с кнопкой
    component: LoginModal, // Какой компонент проверяем
    parameters: {},
    argTypes: {}
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        isOpen: true
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
    args: {
        isOpen: true
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}