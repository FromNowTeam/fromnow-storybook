import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InputField from '@fromnow/src/components/common/InputField';
import { useForm, FormProvider } from 'react-hook-form';

export default {
  title: 'common/InputField',
  components: InputField,
  tags: ['autodocs'],
} as Meta<typeof InputField>;

interface Form {
  title: string;
}

export const Basic: StoryFn<typeof InputField> = args => {
  const methods = useForm<Form>();
  const {
    control,
    formState: { errors },
  } = methods;

  return (
    <FormProvider {...methods}>
      <InputField {...args} control={control} errors={errors} />
    </FormProvider>
  );
};
Basic.args = {
  label: '모임 이름',
  name: 'title',
  rules: {
    required: '필수 입력 항목입니다',
    maxLength: { value: 20, message: '20자 이내로 설정해 주세요.' },
  },
  placeholder: '모임 이름 입력',
};
Basic.argTypes = {
  label: {
    description: '필수',
  },
  name: {
    description: '필수',
  },
  control: {
    description: '필수',
  },
  rules: {
    description: '필수',
  },
  errors: {
    description: '필수',
  },
  placeholder: {
    description: '필수',
  },
};
