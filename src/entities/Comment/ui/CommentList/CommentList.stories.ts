import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { CommentList } from './CommentList';

const meta = {
    title: 'entities/Comment/CommentList', // Указываем где находится папка с кнопкой
    component: CommentList, // Какой компонент проверяем
    parameters: {},
    argTypes: {}
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'hello world',
                user: { id: '1', username: 'Vasya' }
            },
            {
                id: '2',
                text: 'hello world',
                user: { id: '2', username: 'Petya' }
            }
        ]
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}