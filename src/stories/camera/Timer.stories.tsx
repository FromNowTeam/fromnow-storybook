import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Timer from '@fromnow/src/components/Camera/Timer';
import { View } from 'react-native';
import ModalManager from '@fromnow/src/components/Modal/ModalManager';

export default {
  title: 'camera/Timer',
  components: Timer,
  tags: ['autodocs'],
} as Meta<typeof Timer>;

export const Basic: StoryFn<typeof Timer> = () => (
  <ModalManager>
    <View className="bg-black/10">
      <Timer />
    </View>
  </ModalManager>
);
