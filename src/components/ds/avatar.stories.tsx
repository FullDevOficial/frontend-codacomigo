import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Avatar, AvatarFallback, AvatarImage } from './avatar';

type AvatarStoryProps = {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  imageUrl?: string;
  fallback?: string;
};

const meta: Meta<AvatarStoryProps> = {
  title: 'Components/Avatar',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    imageUrl: {
      control: 'text',
    },
    fallback: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<AvatarStoryProps>;

export const Default: Story = {
  args: {
    size: 'md',
    imageUrl: 'https://github.com/shadcn.png',
    fallback: 'User',
  },
  render: ({ size, imageUrl, fallback }) => {
    const sizeMap: Record<AvatarStoryProps['size'], string> = {
      xs: 'w-[50px] h-[50px]',
      sm: 'w-[50.84px] h-[50.49px]',
      md: 'w-[60px] h-[60px]',
      lg: 'w-[67.9px] h-[66.82px]',
      xl: 'w-[181.38px] h-[181.38px]',
    };

    return (
      <Avatar className={sizeMap[size]}>
        <AvatarImage src={imageUrl} alt="Avatar image" />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
    );
  },
};
