import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TeamNotFound from '@fromnow/src/components/Home/TeamNotFound';

export default {
  title: 'home/TeamNotFound',
  components: TeamNotFound,
  tags: ['autodocs'],
} as Meta<typeof TeamNotFound>;

export const Basic: StoryFn<typeof TeamNotFound> = () => <TeamNotFound />;
