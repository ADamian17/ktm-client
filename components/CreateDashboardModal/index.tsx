"use client";
import React from "react";
import { Button, CloseButton, Flex, Modal, ModalBody, ModalHeader, Stack, Text, TextInput, Title } from "@mantine/core";
import { Field, Form, FormProps } from "react-final-form";
import { FieldArray } from 'react-final-form-arrays'
import { useSnapshot } from "valtio";
import arrayMutators from 'final-form-arrays'
import { closeCreateDashboardModal, createDashboardModalProxy } from "@/stores/create-dashboard-modal-proxy";
import { createBoardAction } from "./action";
import { useRouter } from 'next/navigation'

const CreateDashboardModal: React.FC = () => {
  const { isOpen } = useSnapshot(createDashboardModalProxy);
  const router = useRouter()

  const onSubmit: FormProps["onSubmit"] = async (values) => {
    try {
      const createBoard = createBoardAction.bind(values)
      const res = await createBoard(values)

      if (typeof res === "object" && 'error' in res) {
        return { name: res?.error };
      }

      if (res?.createBoard?.uri) {
        closeCreateDashboardModal()
        router.push(res?.createBoard?.uri)
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Modal
      centered
      onClose={closeCreateDashboardModal}
      opened={isOpen}
      withCloseButton={false}
      size={480}
    >
      <ModalHeader>
        <Title order={3}>Add New Board</Title>
      </ModalHeader>

      <ModalBody p='xs'>
        <Form
          onSubmit={onSubmit}
          mutators={{ ...arrayMutators }}
          render={({ handleSubmit, submitting }) => (
            <form
              onSubmit={handleSubmit}
              data-autofocus
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
                        error={(meta?.error && meta?.touched || meta.submitError) && meta.error || meta?.submitError}
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
