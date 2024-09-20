import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AvatarHappyMsg from '@fromnow/src/components/common/AvatarHappyMsg';

export default {
  title: 'common/AvatarHappyMsg',
  components: AvatarHappyMsg,
  tags: ['autodocs'],
} as Meta<typeof AvatarHappyMsg>;

export const Basic: StoryFn<typeof AvatarHappyMsg> = args => <AvatarHappyMsg {...args} />;
Basic.args = {
  message: '모임을 생성하여\n소중한 순간을 기록하고 공유하세요 :)',
};
Basic.argTypes = {
  message: {
    description: '필수',
  },
};
