import React, { FC } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { TextField } from '@material-ui/core';

interface FormTextFieldProps {
  name: string,
  label: string,
  disabled?: boolean,
  register: UseFormRegister<FieldValues>,
  validate: (value) => boolean,
  placeHolder?: string
}

export const FormTextField: FC<FormTextFieldProps> = ({ name, label, disabled, register, validate, placeHolder }) => {
  return (
    <TextField
      {...register(name, {
        validate
      })}
      disabled={disabled}
      fullWidth
      label={label}
      placeholder={placeHolder}
      variant='outlined' />
  )
}