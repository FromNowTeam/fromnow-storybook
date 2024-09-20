import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NotifyItem from '@fromnow/src/components/Notify/NotifyItem';

export default {
  title: 'notify/NotifyItem',
  components: NotifyItem,
  tags: ['autodocs'],
} as Meta<typeof NotifyItem>;

export const Basic: StoryFn<typeof NotifyItem> = () => <NotifyItem />;
