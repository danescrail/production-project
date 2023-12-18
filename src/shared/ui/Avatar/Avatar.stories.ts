import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Avatar } from './Avatar';
import AvatarImg from 'shared/assets/tests/3b2758ad5492a76b578f7ee072e4e894.jpg'

const meta = {
    title: 'shared/Avatar', // Указываем где находится папка с кнопкой
    component: Avatar, // Какой компонент проверяем
    parameters: {},
    argTypes: {}
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {
        size: 150,
        src: AvatarImg
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}