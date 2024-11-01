import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DeleteButton from '@fromnow/src/components/common/SwipeableAction';

export default {
  title: 'common/DeleteButton',
  components: DeleteButton,
  tags: ['autodocs'],
} as Meta<typeof DeleteButton>;

export const Basic: StoryFn<typeof DeleteButton> = args => <DeleteButton {...args} />;
Basic.args = {
  id: 1,
  onDelete: () => {},
};
Basic.argTypes = {
  id: {
    description: '필수',
  },
  onDelete: {
    description: '필수',
  },
};
