import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Timer from '@fromnow/src/components/Camera/Timer';
import { View } from 'react-native';

export default {
  title: 'camera/Timer',
  components: Timer,
  tags: ['autodocs'],
} as Meta<typeof Timer>;

export const Basic: StoryFn<typeof Timer> = () => (
  <View className="bg-black/60">
    <Timer />
  </View>
);
