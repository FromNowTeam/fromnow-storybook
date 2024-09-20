import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from '@fromnow/src/components/common/Button';
import ShareIcon from '../../assets/icons/ShareIcon';

export default {
  title: 'common/Button',
  components: Button,
  tags: ['autodocs'],
} as Meta<typeof Button>;

export const Basic: StoryFn<typeof Button> = args => <Button {...args} />;
Basic.args = {
  children: 'Button',
  size: 'mid',
  color: 'black',
  disabled: false,
  onPress: () => alert('클릭!'),
  icon: <ShareIcon />,
};
Basic.argTypes = {
  children: {
    description: '필수',
  },
  size: {
    options: ['big', 'mid', 'small'],
    control: { type: 'radio' },
    description: '옵션',
  },
  color: {
    options: ['black', 'white', 'yellow'],
    control: { type: 'radio' },
    description: '옵션',
  },
  disabled: {
    control: { type: 'boolean' },
    description: '옵션',
  },
  onPress: {
    action: 'clicked',
    description: '옵션',
  },
  icon: {
    description: '옵션',
  },
};
