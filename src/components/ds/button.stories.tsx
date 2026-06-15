import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import FacebookIcon from '../icons/facebook';
import GoogleIcon from '../icons/google';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Conteúdo do botão',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão manualmente',
    },
    onClick: {
      action: 'clicked',
    },
  },
  parameters: {
    layout: 'centered',
  },
  render: (args) => (
    <div className="flex justify-center">
      <Button {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Google: Story = {
  args: {
    variant: 'social',
    size: 'social',
    label: 'Google',
    icon: <GoogleIcon className="size-6 shrink-0" />,
  },
};

export const Facebook: Story = {
  args: {
    variant: 'social',
    size: 'social',
    label: 'Facebook',
    icon: <FacebookIcon className="size-6 shrink-0" />,
  },
};
