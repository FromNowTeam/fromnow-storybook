import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SplashLottie from '@fromnow/src/components/Lottie/SplashLottie';
import { View } from 'react-native';

export default {
  title: 'lottie/SplashLottie',
  components: SplashLottie,
  tags: ['autodocs'],
} as Meta<typeof SplashLottie>;

export const Basic: StoryFn<typeof SplashLottie> = args => (
  <View className="bg-[#1C1C1E]">
    <SplashLottie {...args} />
  </View>
);
Basic.args = {
  customStyle: { height: 500, width: '100%' },
};
Basic.argTypes = {
  customStyle: {
    description: '옵션',
  },
};
