import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FriendItem from '@fromnow/src/components/common/FriendItem';

export default {
  title: 'common/FriendItem',
  components: FriendItem,
  tags: ['autodocs'],
} as Meta<typeof FriendItem>;

export const Basic: StoryFn<typeof FriendItem> = args => <FriendItem {...args} />;
Basic.args = {
  isFriend: false,
};
Basic.argTypes = {
  isFriend: {
    description: '필수',
  },
};
