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
  diaryId: 1,
  diaryTitle: '프나를 개발하는 모임',
};
Basic.argTypes = {
  diaryId: {
    description: '필수',
  },
  diaryTitle: {
    description: '필수',
  },
};
