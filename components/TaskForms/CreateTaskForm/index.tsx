import React from "react";
import { Stack } from "@mantine/core";
import arrayMutators from 'final-form-arrays'
import { Form, FormProps } from "react-final-form";

import DescriptionField from "../TaskFormComponents/DescriptionField";
import StatusField from "../TaskFormComponents/StatusField";
import SubmitButton from "@/components/UI/Form/SubmitButton";
import TasksField from "../TaskFormComponents/TasksField";
import TitleField from "../TaskFormComponents/TitleField";

const CreateTaskForm: React.FC = () => {
  const onSubmit: FormProps["onSubmit"] = async (values) => {
    try {
      alert(JSON.stringify(values, null, 2))
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

            <TasksField submitting={submitting} />

            <StatusField />

            <SubmitButton text='Create task' submitting={submitting} />
          </Stack>
        </form>
      )}
    />
  )
};

export default CreateTaskForm;