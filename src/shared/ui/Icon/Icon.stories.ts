import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Icon } from './Icon';
import IconCalendar from 'shared/assets/calendar-20-20.svg';

const meta = {
    title: 'shared/Icon', // Указываем где находится папка с кнопкой
    component: Icon, // Какой компонент проверяем
    parameters: {},
    argTypes: {}
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        Svg: IconCalendar
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
    args: {
        Svg: IconCalendar
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}