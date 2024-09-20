import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MyFriendItem from '@fromnow/src/components/TeamFriendAdd/MyFriendItem';

export default {
  title: 'teamFriendAdd/MyFriendItem',
  components: MyFriendItem,
  tags: ['autodocs'],
} as Meta<typeof MyFriendItem>;

export const Basic: StoryFn<typeof MyFriendItem> = () => <MyFriendItem />;
