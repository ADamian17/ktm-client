"use client";
import React from 'react'
import { Form, FormProps } from 'react-final-form'
import { Stack } from '@mantine/core'
import { useRouter } from 'next/navigation';
import arrayMutators from 'final-form-arrays'

import { closeCreateDashboardModal } from '@/stores/create-dashboard-modal-proxy';
import { createBoardAction } from './create-board-action';
import ColumnsField from '../BoardFromComponents/ColumnsField'
import NameField from '../BoardFromComponents/NameField'
import SubmitButton from '@/components/UI/Form/SubmitButton'

const CreateBoardForm = () => {
  const router = useRouter()

  const onSubmit: FormProps["onSubmit"] = async (values) => {
    try {
      const createBoard = createBoardAction.bind(values)
      const res = await createBoard(values)

      if (typeof res === "object" && 'error' in res) {
        return { name: res?.error }; // this is for form validation 
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
    <Form
      onSubmit={onSubmit}
      mutators={{ ...arrayMutators }}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit} data-autofocus>
          <Stack
            bg="var(--mantine-color-body)"
            align="stretch"
            justify="center"
            gap="xl"
          >
            <NameField />

            <ColumnsField submitting={submitting} />

            <SubmitButton submitting={submitting} text="Create New Board" />
          </Stack>
        </form>
      )}
    />
  )
}

export default CreateBoardForm
