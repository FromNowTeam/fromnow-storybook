import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FriendItem from '@fromnow/src/components/common/FriendItem';
import profilePng from '../../assets/png/profile.png';

export default {
  title: 'common/FriendItem',
  components: FriendItem,
  tags: ['autodocs'],
} as Meta<typeof FriendItem>;

export const Basic: StoryFn<typeof FriendItem> = args => <FriendItem {...args} />;
Basic.args = {
  memberId: 1,
  profileName: '채순',
  profilePhotoUrl: profilePng,
  friend: false,
  isFriendReq: false,
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
  isFriendReq: {
    description: '옵션',
  },
};
