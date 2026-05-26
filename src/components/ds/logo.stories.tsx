import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Logo } from './logo';

const meta: Meta<typeof Logo> = {
  title: 'Design System/Brand/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Playground: Story = {
  args: {
    size: 'sm',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Logo size="sm" />
      <Logo size="lg" />
    </div>
  ),
};
