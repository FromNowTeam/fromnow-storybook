import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TeamItem from '@fromnow/src/components/MyTeam/TeamItem';

export default {
  title: 'myTeam/TeamItem',
  components: TeamItem,
  tags: ['autodocs'],
} as Meta<typeof TeamItem>;

export const Basic: StoryFn<typeof TeamItem> = args => <TeamItem {...args} />;
Basic.args = {
  isTeam: false,
};
Basic.argTypes = {
  isTeam: {
    description: '필수',
  },
};
