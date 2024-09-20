import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SelectTeamItem from '@fromnow/src/components/PostEdit/SelectTeamItem';

export default {
  title: 'postEdit/SelectTeamItem',
  components: SelectTeamItem,
  tags: ['autodocs'],
} as Meta<typeof SelectTeamItem>;

export const Basic: StoryFn<typeof SelectTeamItem> = args => <SelectTeamItem {...args} />;
Basic.args = {
  isSharing: false,
};
Basic.argTypes = {
  isSharing: {
    description: '필수',
  },
};
