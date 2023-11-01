import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

const meta = {
    title: 'shared/Text', // Указываем где находится папка с кнопкой
    component: Text, // Какой компонент проверяем
    parameters: {},
    argTypes: {}
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Text... Text... Text...'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const OnlyTitle: Story = {
    args: {
        title: 'Title'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const OnlyText: Story = {
    args: {
        text: 'Text... Text... Text...'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const Error: Story = {
    args: {
        title: 'Error Title',
        text: 'Error Text',
        theme: TextTheme.ERROR
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}
