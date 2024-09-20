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
  profile: profilePng,
  nickname: 'tata',
  isFriend: true,
};
Basic.argTypes = {
  profile: {
    description: '필수',
  },
  nickname: {
    description: '필수',
  },
  isFriend: {
    description: '필수',
  },
};
