import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import LoadingLottie from '@fromnow/src/components/Lottie/LoadingLottie';

export default {
  title: 'lottie/LoadingLottie',
  components: LoadingLottie,
  tags: ['autodocs'],
} as Meta<typeof LoadingLottie>;

export const Basic: StoryFn<typeof LoadingLottie> = args => <LoadingLottie {...args} />;
Basic.args = {
  customStyle: { width: 130, height: 130 },
};
Basic.argTypes = {
  customStyle: {
    description: '옵션',
  },
};
