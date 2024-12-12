import { CloseButton, Flex, TextInput } from '@mantine/core'
import React from 'react'
import { Field } from 'react-final-form'

type TextFieldWithCloseIconProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  fieldName: string
}

const TextFieldWithCloseIcon: React.FC<TextFieldWithCloseIconProps> = ({ onClick, fieldName }) => {
  return (
    <Flex gap="md">
      <Field
        name={fieldName}
        validate={(value) => value ? undefined : 'Can\'t be empty'}
      >
        {({ input, meta }) => (
          <TextInput
            {...input}
            flex={2}
            error={(meta?.error && meta?.touched) && meta.error}
            placeholder='e.g. Take a break'
          />
        )}
      </Field>

      <CloseButton mt={5} onClick={onClick} />
    </Flex>
  )
}

export default TextFieldWithCloseIcon
