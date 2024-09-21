import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HomeHeader from '@fromnow/src/components/Home/HomeHeader';

export default {
  title: 'home/HomeHeader',
  components: HomeHeader,
  tags: ['autodocs'],
} as Meta<typeof HomeHeader>;

export const Basic: StoryFn<typeof HomeHeader> = () => {
  const [isEdit, setIsEdit] = useState(false);
  return <HomeHeader isEdit={isEdit} setIsEdit={setIsEdit} />;
};
Basic.argTypes = {
  isEdit: {
    description: '필수',
  },
  setIsEdit: {
    description: '필수',
  },
};
