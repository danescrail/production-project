import type { Meta, StoryObj } from '@storybook/react';

import { Button, ThemeButton } from './Button';
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClearLight: Story = {
    args: {
        children: 'TextClear',
        theme: ThemeButton.CLEAR
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const ClearDark: Story = {
    args: {
        children: 'TextClear',
        theme: ThemeButton.CLEAR
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const PrimaryLight: Story = {
    args: {
        children: 'TextPrimary',
        theme: ThemeButton.PRIMARY
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const PrimaryDark: Story = {
    args: {
        children: 'TextPrimary',
        theme: ThemeButton.PRIMARY
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}