import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ConfirmModal from '@fromnow/src/components/Modal/ConfirmModal';
import Button from '@fromnow/src/components/common/Button';
import ModalManager, { useModal } from '@fromnow/src/components/Modal/ModalManager';

export default {
  title: 'modal/Modal',
  component: ConfirmModal,
  tags: ['autodocs'],
} as Meta<typeof ConfirmModal>;

export const Basic: StoryFn<typeof ConfirmModal> = args => {
  const { showModal } = useModal();
  const openModal = () => {
    showModal({
      type: args.type,
      title: args.title,
      description: args.description,
      confirm: () => alert('확인 버튼 클릭!'),
    });
  };

  return <Button onPress={openModal}>클릭하면 모달이 떠요!</Button>;
};

Basic.args = {
  type: 'confirm',
  title: '제목을 입력하세요',
  description: '모달 설명입니다.',
};
Basic.argTypes = {
  type: {
    description: '필수',
  },
  open: {
    description: '필수',
  },
  title: {
    description: '(옵션) 모달 제목',
  },
  description: {
    description: '(필수) 모달 설명',
  },
  confirm: {
    description: '(옵션) 확인 버튼 클릭 시 실행할 함수',
  },
  missionImg: {
    description: '옵션',
  },
};
