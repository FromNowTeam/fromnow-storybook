import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MiniLoading from '@fromnow/src/components/common/MiniLoading';

export default {
  title: 'common/MiniLoading',
  components: MiniLoading,
  tags: ['autodocs'],
} as Meta<typeof MiniLoading>;

export const Basic: StoryFn<typeof MiniLoading> = () => <MiniLoading />;
