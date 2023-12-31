import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalOpen: Story = {
    args: {
        children: 'fdssFSfsDSFSDsFSDFSFSDFSDFSD',
        isOpen: true
    }
}

export const Light: Story = {
    args: {
        children: 'test',
        isOpen: true
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
    args: {
        children: 'test',
        isOpen: true
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}