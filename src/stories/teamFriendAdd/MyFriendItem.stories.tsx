import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MyFriendItem from '@fromnow/src/components/TeamFriendAdd/MyFriendItem';
import profilePng from '../../assets/png/profile.png';

export default {
  title: 'teamFriendAdd/MyFriendItem',
  components: MyFriendItem,
  tags: ['autodocs'],
} as Meta<typeof MyFriendItem>;

export const Basic: StoryFn<typeof MyFriendItem> = args => <MyFriendItem {...args} />;
Basic.args = {
  memberId: 1,
  profileName: '채순',
  profilePhotoUrl: profilePng,
  friend: false,
};
Basic.argTypes = {
  memberId: {
    description: '필수',
  },
  profileName: {
    description: '필수',
  },
  profilePhotoUrl: {
    description: '필수',
  },
  friend: {
    description: '필수',
  },
};
