import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SearchNotFound from '@fromnow/src/components/Search/SearchNotFound';

export default {
  title: 'search/SearchNotFound',
  components: SearchNotFound,
  tags: ['autodocs'],
} as Meta<typeof SearchNotFound>;

export const Basic: StoryFn<typeof SearchNotFound> = () => <SearchNotFound />;
