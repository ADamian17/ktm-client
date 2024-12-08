import { Button, CloseButton, Flex, Stack, Text, TextInput } from '@mantine/core'
import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

type ColumnsFieldProps = {
  submitting: boolean
  onRemoveColumn?: (col: Record<string, string | boolean>) => void
}

const ColumnsField: React.FC<ColumnsFieldProps> = ({ submitting, onRemoveColumn }) => (
  <FieldArray name="columns">
    {({ fields }) => (
      <Stack align="stretch" justify="center" gap="xs">
        {typeof fields?.length !== 'undefined' && fields?.length > 0 && (
          <Text fw={500} c="white">Board Columns</Text>
        )}

        {fields.map((column, index) => {
          return (
            <Flex key={column} gap="md">
              <Field
                name={`${column}.name`}
                validate={(value) => value ? undefined : 'Can\'t be empty'}
              >
                {({ input, meta }) => (
                  <TextInput
                    {...input}
                    size="md"
                    flex={2}
                    error={(meta?.error && meta?.touched) && meta.error}
                  />
                )}
              </Field>

              <CloseButton
                mt={5}
                onClick={() => {
                  const removedItem = { ...fields.remove(index), _destroy: true };

                  if (typeof onRemoveColumn === 'function') {
                    onRemoveColumn(removedItem);
                  }
                }}
                size="md"
              />
            </Flex>
          )
        })}

        <Button
          color="violet"
          disabled={submitting}
          fullWidth
          onClick={() => fields.push({ name: '' })}
          radius="lg"
          size="md"
          mt="xs"
          type="button"
          variant="white"
        >
          Add new column
        </Button>
      </Stack>
    )}
  </FieldArray>
)

export default ColumnsField
