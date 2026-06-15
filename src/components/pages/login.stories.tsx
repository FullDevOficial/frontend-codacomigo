import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Login from '@/app/login/page';

const meta: Meta<typeof Login> = {
  title: 'Pages/Login',
  component: Login,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Login>;

export const Default: Story = {};
