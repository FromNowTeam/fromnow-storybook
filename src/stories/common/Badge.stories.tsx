import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Badge from '@fromnow/src/components/common/Badge';

export default {
  title: 'common/Badge',
  components: Badge,
  tags: ['autodocs'],
} as Meta<typeof Badge>;

export const Basic: StoryFn<typeof Badge> = args => <Badge {...args} />;
Basic.args = {
  width: 36,
  height: 37,
  bgColor: '#1C1C1E',
  color: '#fff',
};
Basic.argTypes = {
  width: {
    description: '옵션',
  },
  height: {
    description: '옵션',
  },
  bgColor: {
    description: '옵션',
  },
  color: {
    description: '옵션',
  },
};
