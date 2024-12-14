import React from "react";
import { Stack } from "@mantine/core";
import arrayMutators from 'final-form-arrays'
import { Form, FormProps } from "react-final-form";

import DescriptionField from "../TaskFormComponents/DescriptionField";
import StatusField from "../TaskFormComponents/StatusField";
import SubmitButton from "@/components/UI/Form/SubmitButton";
import SubtasksField from "../TaskFormComponents/SubtasksField";
import TitleField from "../TaskFormComponents/TitleField";
import { revalidateBoardAction } from "./revalidate-board-action";
import { createTaskAction } from "./create-task-action";

type CreateTaskFormValues = {
  title: string;
  description: string;
  columnId: string
}

type CreateTaskFormProps = {
  closeModal: () => void
  pathname: string
}

const CreateTaskForm: React.FC<CreateTaskFormProps> = ({ closeModal, pathname }) => {
  const onSubmit: FormProps<CreateTaskFormValues>["onSubmit"] = async (values) => {
    try {
      const createTask = createTaskAction.bind(values)
      const res = await createTask(values)

      if (typeof res === "object" && 'error' in res) {
        return console.error(res?.error);
      }

      if (res?.createTask?.id) {
        const revalidateBoard = revalidateBoardAction.bind(pathname)
        revalidateBoard(pathname)
        closeModal()
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form
      onSubmit={onSubmit}
      mutators={{ ...arrayMutators }}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit} data-autofocus>
          <Stack align="stretch" justify="center" gap="xl">
            <TitleField />

            <DescriptionField />

            <SubtasksField submitting={submitting} />

            <StatusField />

            <SubmitButton text='Create task' submitting={submitting} />
          </Stack>
        </form>
      )}
    />
  )
};

export default CreateTaskForm;
