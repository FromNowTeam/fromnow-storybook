import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HistoryChip from '@fromnow/src/components/Search/HistoryChip';

export default {
  title: 'search/HistoryChip',
  components: HistoryChip,
  tags: ['autodocs'],
} as Meta<typeof HistoryChip>;

export const Basic: StoryFn<typeof HistoryChip> = args => <HistoryChip {...args} />;
Basic.args = {
  title: 'tata',
  removeOne: () => {},
};
Basic.argTypes = {
  title: {
    description: '필수',
  },
  removeOne: {
    description: '필수',
  },
};
