import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AddCommentForm from './AddCommentForm';

const meta = {
    title: 'features/AddCommentForm', // Указываем где находится папка с кнопкой
    component: AddCommentForm, // Какой компонент проверяем
    parameters: {},
    argTypes: {}
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Normal: Story = {
//     args: {
//         onSendComment: ('onSendComment')
//     },
//     decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({
//         addCommentForm: {

//         }
//     })]
// }

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
}