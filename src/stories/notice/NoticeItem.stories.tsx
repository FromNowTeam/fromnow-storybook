import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NoticeItem from '@fromnow/src/components/Notify/NoticeItem';
import profilePng from '../../assets/png/profile.png';

export default {
  title: 'notice/NoticeItem',
  components: NoticeItem,
  tags: ['autodocs'],
} as Meta<typeof NoticeItem>;

export const Basic: StoryFn<typeof NoticeItem> = args => <NoticeItem {...args} />;
Basic.args = {
  id: 1,
  imgUrl: profilePng,
  path: '',
  content: '출근실어님이 프롬나우 모임에 당신을 초대 했어요.',
  setNoticeList: () => {},
};
Basic.argTypes = {
  id: {
    description: '필수',
  },
  imgUrl: {
    description: '필수',
  },
  path: {
    description: '필수',
  },
  content: {
    description: '필수',
  },
  setNoticeList: {
    description: '(필수) Dispatch<SetStateAction<Notice[]>>',
  },
};
