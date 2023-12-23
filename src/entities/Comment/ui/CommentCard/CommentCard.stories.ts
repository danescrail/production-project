import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { CommentCard } from './CommentCard';

const meta = {
    title: 'entities/Comment/CommentCard', // Указываем где находится папка с кнопкой
    component: CommentCard, // Какой компонент проверяем
    parameters: {},
    argTypes: {}
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comment: {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'Vasya' }
        },
        isLoading: false
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const Loading: Story = {
    args: {
        comment: {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'Vasya' }
        },
        isLoading: true
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}