import React from 'react'
import { FieldArray } from 'react-final-form-arrays'
import { Stack, Text } from '@mantine/core'

import ActionButton from '@/components/UI/Form/ActionButton'
import TextFieldWithCloseIcon from '@/components/UI/Form/TextFieldWithCloseIcon'

type TasksFieldProps = {
  submitting: boolean
}

const TasksField: React.FC<TasksFieldProps> = ({ submitting }) => (
  <FieldArray name="tasks">
    {({ fields }) => (
      <Stack align="stretch" justify="center" gap="xs">
        <Text fw={500}>Subtasks</Text>

        {fields.map((column, index) => (
          <TextFieldWithCloseIcon
            fieldName={`${column}.name`}
            key={column}
            onClick={() => { fields.remove(index) }}
          />
        ))}

        <ActionButton
          submitting={submitting}
          onClick={() => fields.push({ title: '' })}
          text="Add new subtask"
        />
      </Stack>
    )}
  </FieldArray>
)

export default TasksField
