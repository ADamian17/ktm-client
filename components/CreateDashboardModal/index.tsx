"use client";
import React from "react";
import { Button, CloseButton, Flex, Modal, ModalBody, ModalHeader, Stack, Text, TextInput, Title } from "@mantine/core";
import { Field, Form } from "react-final-form";
import { FieldArray } from 'react-final-form-arrays'
import { useSnapshot } from "valtio";
import arrayMutators from 'final-form-arrays'

import { closeCreateDashboardModal, createDashboardModalProxy } from "@/stores/create-dashboard-modal-proxy";

const CreateDashboardModal: React.FC = () => {
  const { isOpen } = useSnapshot(createDashboardModalProxy);

  return (
    <Modal
      centered
      onClose={closeCreateDashboardModal}
      opened={isOpen}
      withCloseButton={false}
      size={480}
    >
      <ModalHeader>
        <Title order={3} c="white">Add New Board</Title>
      </ModalHeader>
      <ModalBody p='xs'>
        <Form
          onSubmit={(values) => { alert(JSON.stringify(values, null, 2)) }}
          mutators={{
            ...arrayMutators
          }}
          render={({ handleSubmit, submitting }) => (
            <form
              onSubmit={handleSubmit}
            >
              <Stack
                bg="var(--mantine-color-body)"
                align="stretch"
                justify="center"
                gap="xl"
              >
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
                        error={(meta?.error && meta?.touched) && meta.error}
                      />
                    </>
                  )}
                </Field>

                <FieldArray name="columns">
                  {({ fields }) => (
                    <Stack align="stretch" justify="center" gap="xs">
                      {
                        typeof fields?.length !== 'undefined' && fields?.length > 0 && (
                          <Text fw={500} c="white">Board Columns</Text>
                        )
                      }

                      {
                        fields.map((column, index) => (
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

                            <CloseButton size="md" onClick={() => fields.remove(index)} mt={5} />
                          </Flex>
                        ))
                      }

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

                <Button
                  color="violet"
                  disabled={submitting}
                  fullWidth
                  radius="lg"
                  size="md"
                  type="submit"
                >
                  Create New Board
                </Button>
              </Stack>
            </form>
          )}
        />
      </ModalBody>
    </Modal >
  )
};

export default CreateDashboardModal;
