import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MyNickname from '@fromnow/src/components/Profile/MyNickname';

export default {
  title: 'profile/MyNickname',
  components: MyNickname,
  tags: ['autodocs'],
} as Meta<typeof MyNickname>;

export const Basic: StoryFn<typeof MyNickname> = args => <MyNickname {...args} />;
Basic.args = {
  profileName: '채순',
};
Basic.argTypes = {
  profileName: {
    description: '필수',
  },
};
