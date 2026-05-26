import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ErrorPage from './error-page';

const meta: Meta<typeof ErrorPage> = {
  title: 'Pages/ErrorPage',
  component: ErrorPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ErrorPage>;

export const Default: Story = {};
