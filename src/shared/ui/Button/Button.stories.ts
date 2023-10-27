import type { Meta, StoryObj } from '@storybook/react';

import { Button, SizeButton, ThemeButton } from './Button';
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

export const ClearInvertedLight: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR_INVERTED
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const ClearInvertedDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR_INVERTED
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

export const BackgroundThemeLight: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.BACKGROUND
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const BackgroundThemeDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.BACKGROUND_INVERTED
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const BackgroundInvertedLight: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.BACKGROUND_INVERTED
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const BackgroundInvertedDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.BACKGROUND_INVERTED
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const SquareSizeM: Story = {
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: SizeButton.M
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: SizeButton.L
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: SizeButton.XL
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const ClearLightSizeM: Story = {
    args: {
        children: 'TextClear',
        theme: ThemeButton.CLEAR,
        size: SizeButton.M
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const ClearLightSizeL: Story = {
    args: {
        children: 'TextClear',
        theme: ThemeButton.CLEAR,
        size: SizeButton.L
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}
export const ClearLightSizeXL: Story = {
    args: {
        children: 'TextClear',
        theme: ThemeButton.CLEAR,
        size: SizeButton.XL
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}