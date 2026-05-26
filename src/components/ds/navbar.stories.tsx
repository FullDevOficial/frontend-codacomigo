import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TooltipProvider } from '../ui/tooltip';
import { Navbar } from './navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Design System/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  args: {
    active: '/profile',
  },
  argTypes: {
    active: {
      control: 'select',
      description: 'Ativa o item da Navbar com base no href',
      options: ['/profile', '/conversations', '/likes', '/settings'],
    },
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};
