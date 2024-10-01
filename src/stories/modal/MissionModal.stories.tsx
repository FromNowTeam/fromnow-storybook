import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MissionModal from '@fromnow/src/components/Modal/MissionModal';
import missionPng from '../../assets/png/mission.png';
import Button from '@fromnow/src/components/common/Button';
import ModalManager, { useModal } from '@fromnow/src/components/Modal/ModalManager';

export default {
  title: 'modal/MissionModal',
  component: MissionModal,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <ModalManager>
        <Story />
      </ModalManager>
    ),
  ],
} as Meta<typeof MissionModal>;

export const Basic: StoryFn<typeof MissionModal> = args => {
  const { showModal } = useModal();
  const openModal = () => {
    showModal({
      type: 'mission',
      title: args.title,
      description: args.description,
      confirm: () => alert('확인 버튼 클릭!'),
      missionImg: args.missionImg,
    });
  };

  return <Button onPress={openModal}>클릭하면 모달이 떠요!</Button>;
};

Basic.args = {
  title: '오늘의 미션!',
  description: '브이 포즈를 하고 셀카를 찍어보세요',
  confirm: () => alert('확인 버튼 클릭!'),
  missionImg: missionPng,
};

Basic.argTypes = {
  title: {
    description: '(옵션) 모달 제목',
  },
  description: {
    description: '(필수) 모달 설명',
  },
  confirm: {
    description: '(필수) 확인 버튼 클릭 시 실행할 함수',
  },
  missionImg: {
    description: '(필수) 미션 이미지',
  },
};
