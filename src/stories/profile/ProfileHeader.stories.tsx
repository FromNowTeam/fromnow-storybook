import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProfileHeader from '@fromnow/src/components/Profile/ProfileHeader';

export default {
  title: 'profile/ProfileHeader',
  components: ProfileHeader,
  tags: ['autodocs'],
} as Meta<typeof ProfileHeader>;

export const Basic: StoryFn<typeof ProfileHeader> = () => <ProfileHeader />;
