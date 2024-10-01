import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import BoardItem from '@fromnow/src/components/common/BoardItem';
import boardPng from '../../assets/png/board.png';
import profilePng from '../../assets/png/profile.png';

export default {
  title: 'common/BoardItem',
  components: BoardItem,
  tags: ['autodocs'],
} as Meta<typeof BoardItem>;

export const Basic: StoryFn<typeof BoardItem> = args => <BoardItem {...args} />;
Basic.args = {
  boardId: 1,
  profilePhotoUrl: profilePng,
  profileName: 'TATA',
  contentPhotoUrl: boardPng,
  content: '나는 어제 디자이너를 죽였다\n이유는 터무니 없다\n개발할게 너무 많았기 때문이다',
  createdDate: '00:00:00',
};
Basic.argTypes = {
  boardId: {
    description: '옵션',
  },
  profilePhotoUrl: {
    description: '옵션',
  },
  profileName: {
    description: '옵션',
  },
  contentPhotoUrl: {
    description: '옵션',
  },
  content: {
    description: '옵션',
  },
  createdDate: {
    description: '옵션',
  },
};
