import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AvatarSadMsg from '@fromnow/src/components/common/AvatarSadMsg';

export default {
  title: 'common/AvatarSadMsg',
  components: AvatarSadMsg,
  tags: ['autodocs'],
} as Meta<typeof AvatarSadMsg>;

export const Basic: StoryFn<typeof AvatarSadMsg> = args => <AvatarSadMsg {...args} />;
Basic.args = {
  message: '친구를 찾지 못했어요 ;(\n링크를 공유하여 친구를 초대해 보세요!',
};
Basic.argTypes = {
  message: {
    description: '필수',
  },
};
