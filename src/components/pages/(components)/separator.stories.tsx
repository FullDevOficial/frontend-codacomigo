import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SeparatorLogin } from './separatorLogin';

const meta: Meta<typeof SeparatorLogin> = {
  title: 'Pages/Login/SeparatorLogin',
  component: SeparatorLogin,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <div className="w-72">
      <SeparatorLogin />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof SeparatorLogin>;

export const Default: Story = {};
