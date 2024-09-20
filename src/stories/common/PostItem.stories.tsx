import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PostItem from '@fromnow/src/components/common/PostItem';

export default {
  title: 'common/PostItem',
  components: PostItem,
  tags: ['autodocs'],
} as Meta<typeof PostItem>;

export const Basic: StoryFn<typeof PostItem> = () => <PostItem />;
