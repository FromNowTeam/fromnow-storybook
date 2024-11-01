import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MyPhoto from '@fromnow/src/components/Profile/MyPhoto';
import profilePng from '../../assets/png/profile.png';

export default {
  title: 'profile/MyPhoto',
  components: MyPhoto,
  tags: ['autodocs'],
} as Meta<typeof MyPhoto>;

export const Basic: StoryFn<typeof MyPhoto> = args => <MyPhoto {...args} />;
Basic.args = {
  photoUrl: profilePng,
};
Basic.argTypes = {
  photoUrl: {
    description: '필수',
  },
};
