import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import RegisterPage from './register-page'

const meta: Meta<typeof RegisterPage> = {
  title: 'Pages/RegisterPage',
  component: RegisterPage,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof RegisterPage>

export const Default: Story = {}