import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { mockUserProfile, mockUserProfileError } from '@packages/mock'
import { UserProfile } from './UserProfile'

type Component = typeof UserProfile
type Meta = ComponentMeta<Component>
type Story = ComponentStoryObj<Component>

const meta: Meta = {
  title: 'features/user/Userprofile',
  component: UserProfile,
  parameters: {
    msw: { handlers: [mockUserProfile] },
  },
}

export default meta

export const Default: Story = {}

export const Error: Story = {}
Error.parameters = {
  msw: { handlers: [mockUserProfileError] },
}
