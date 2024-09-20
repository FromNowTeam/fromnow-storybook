import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TeamFolder from '@fromnow/src/components/common/TeamFolder';
import profilePng from '../../assets/png/profile.png';
import { View } from 'react-native';

export default {
  title: 'common/TeamFolder',
  components: TeamFolder,
  tags: ['autodocs'],
} as Meta<typeof TeamFolder>;

export const Basic: StoryFn<typeof TeamFolder> = args => (
  <View className="w-[162px] h-[162px]">
    <TeamFolder {...args} />
  </View>
);
Basic.args = {
  isNew: true,
  id: 1,
  color: 'pink',
  title: '아줌마들의 우정은 디질때까지',
  users: [profilePng, profilePng, profilePng],
};
Basic.argTypes = {
  isNew: {
    description: '옵션',
  },
  id: {
    description: '필수',
  },
  color: {
    options: ['pink', 'yellow', 'blue', 'green', 'gray'],
    control: { type: 'radio' },
    description: '필수',
  },
  title: {
    description: '필수',
  },
  users: {
    description: '필수',
  },
};
