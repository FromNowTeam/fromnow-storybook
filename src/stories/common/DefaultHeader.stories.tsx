import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DefaultHeader from '@fromnow/src/components/common/DefaultHeader';

export default {
  title: 'common/DefaultHeader',
  components: DefaultHeader,
  tags: ['autodocs'],
} as Meta<typeof DefaultHeader>;

export const Basic: StoryFn<typeof DefaultHeader> = args => <DefaultHeader {...args} />;
Basic.args = {
  title: '내 친구',
  customStyle: { backgroundColor: '#F8F8FB' },
};
Basic.argTypes = {
  title: {
    description: '필수',
  },
  customStyle: {
    description: '옵션',
  },
};
