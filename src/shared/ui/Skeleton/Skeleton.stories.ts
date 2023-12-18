import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Skeleton } from './Skeleton';

const meta = {
    title: 'shared/Skeleton', // Указываем где находится папка с кнопкой
    component: Skeleton, // Какой компонент проверяем
    parameters: {},
    argTypes: {}
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        width: 100,
        height: 100
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const Circle: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const NormalDark: Story = {
    args: {
        width: 100,
        height: 100
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const CircleDark: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const NormalBlue: Story = {
    args: {
        width: 100,
        height: 100
    },
    decorators: [ThemeDecorator(Theme.BLUE)]
}

export const CircleBlue: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100
    },
    decorators: [ThemeDecorator(Theme.BLUE)]
}
