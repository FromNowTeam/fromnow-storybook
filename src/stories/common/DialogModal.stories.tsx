import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DialogModal from '@fromnow/src/components/common/DialogModal';
import Button from '@fromnow/src/components/common/Button';

export default {
  title: 'common/DialogModal',
  components: DialogModal,
  tags: ['autodocs'],
} as Meta<typeof DialogModal>;

export const Basic: StoryFn<typeof DialogModal> = args => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onPress={() => setOpen(true)}>클릭하면 모달이 떠요!</Button>
      <DialogModal {...args} open={open} setOpen={setOpen} />
    </>
  );
};
Basic.args = {
  title: '제목을 입력하세요',
  description: '모달 설명입니다.',
  confirm: () => alert('확인 버튼 클릭!'),
};
Basic.argTypes = {
  open: {
    description: '(필수) 모달의 열림 상태',
  },
  setOpen: {
    description: '(필수) 모달 상태 변경 함수',
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
};
