import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

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