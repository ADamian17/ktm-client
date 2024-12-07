import { TextInput } from '@mantine/core'
import React from 'react'
import { Field } from 'react-final-form'

const NameField: React.FC = () => (
  <Field
    name="name"
    validate={(value) => value ? undefined : 'Can\'t be empty'}
  >
    {({ input, meta }) => (
      <>
        <TextInput
          c="white"
          {...input}
          label="Board Name"
          placeholder="e.g Web Design"
          size="md"
          error={(meta?.error && meta?.touched || meta.submitError) && meta.error || meta?.submitError}
        />
      </>
    )}
  </Field>
)

export default NameField
