import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MissionModal from '@fromnow/src/components/Camera/MissionModal';
import missionPng from '../../assets/png/mission.png';
import Button from '@fromnow/src/components/common/Button';

export default {
  title: 'camera/MissionModal',
  components: MissionModal,
  tags: ['autodocs'],
} as Meta<typeof MissionModal>;

export const Basic: StoryFn<typeof MissionModal> = args => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onPress={() => setOpen(true)}>클릭하면 모달이 떠요!</Button>
      <MissionModal {...args} open={open} setOpen={setOpen} />
    </>
  );
};
Basic.args = {
  title: '오늘의 미션!',
  description: '브이 포즈를 하고 셀카를 찍어보세요',
  confirm: () => alert('확인 버튼 클릭!'),
  missionImg: missionPng,
};
Basic.argTypes = {
  open: {
    description: '(필수) state 모달의 열림 상태',
  },
  setOpen: {
    description: '(필수) setState 모달 상태 변경',
  },
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
