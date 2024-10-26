import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FriendItem from '@fromnow/src/components/TeamSetting/FriendItem';
import profilePng from '../../assets/png/profile.png';

export default {
  title: 'teamSetting/FriendItem',
  components: FriendItem,
  tags: ['autodocs'],
} as Meta<typeof FriendItem>;

export const Basic: StoryFn<typeof FriendItem> = args => <FriendItem {...args} />;
Basic.args = {
  memberId: 1,
  profileName: 'tata',
  photoUrl: profilePng,
  owner: false,
  friend: false,
};
Basic.argTypes = {
  memberId: {
    description: '필수',
  },
  profileName: {
    description: '필수',
  },
  photoUrl: {
    description: '필수',
  },
  owner: {
    description: '필수',
  },
  friend: {
    description: '필수',
  },
};
