import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SelectTeamItem from '@fromnow/src/components/BoardEdit/SelectTeamItem';
import profilePng from '../../assets/png/profile.png';

export default {
  title: 'postEdit/SelectTeamItem',
  components: SelectTeamItem,
  tags: ['autodocs'],
} as Meta<typeof SelectTeamItem>;

export const Basic: StoryFn<typeof SelectTeamItem> = args => <SelectTeamItem {...args} />;
Basic.args = {
  id: 1,
  title: '프나를 개발하는 모임',
  photoUrls: [profilePng, profilePng, profilePng, profilePng, profilePng],
  toggleSharing: (id: number) => {
    alert(id);
  },
  createdAt: '2024-10-26',
  recivedAt: '2024-10-26',
  isNew: false,
  isSharing: false,
};
Basic.argTypes = {
  id: {
    description: '필수',
  },
  title: {
    description: '필수',
  },
  photoUrls: {
    description: '필수',
  },
  toggleSharing: {
    description: '필수',
  },
  createdAt: {
    description: '필수',
  },
  recivedAt: {
    description: '필수',
  },
  isNew: {
    description: '필수',
  },
  isSharing: {
    description: '필수',
  },
};
