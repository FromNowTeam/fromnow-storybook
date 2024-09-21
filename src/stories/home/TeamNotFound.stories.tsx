import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TeamNotFound from '@fromnow/src/components/Home/TeamNotFound';
import { View } from 'react-native';

export default {
  title: 'home/TeamNotFound',
  components: TeamNotFound,
  tags: ['autodocs'],
} as Meta<typeof TeamNotFound>;

export const Basic: StoryFn<typeof TeamNotFound> = () => (
  <View className="transform translate-y-[120px]">
    <TeamNotFound />
  </View>
);
