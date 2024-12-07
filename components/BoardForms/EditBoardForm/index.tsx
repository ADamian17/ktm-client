"use client";
import React, { useCallback, useRef } from 'react'
import { Form, FormProps } from 'react-final-form'
import { Stack } from '@mantine/core';
import arrayMutators from 'final-form-arrays'
import { useSnapshot } from 'valtio';

import { closeEditDashboardModal } from '@/stores/edit-dashboard-modal-proxy';
import { currentBoardProxy } from '@/stores/current-board-proxy';
import { editBoardAction } from './edit-board-action';
import { onSuccessEditBoardAction } from './on-success-edit-board-action';
import ColumnsField from '../BoardFromComponents/ColumnsField'
import NameField from '../BoardFromComponents/NameField'
import SubmitButton from '@/components/UI/Form/SubmitButton'

const EditBoardForm = () => {
  const { board } = useSnapshot(currentBoardProxy.boardData);
  const removedColumns = useRef<Array<Record<string, string | boolean>>>([])

  const initialValues = {
    name: board?.name ?? '',
    columns: (board?.columns?.nodes ?? []).map((col) => ({ name: col?.name ?? '', id: col?.id ?? '' })),
  }

  const onSubmit: FormProps["onSubmit"] = async (values) => {
    try {
      console.log('board?.id', board?.id);

      const editBoardData = { ...values, id: board?.id, columns: [...values.columns, ...removedColumns.current] }
      const editBoard = editBoardAction.bind(editBoardData)
      const res = await editBoard(editBoardData)

      if (typeof res === "object" && 'error' in res) {
        return { name: res?.error }; // this is for form validation 
      }

      if (res?.updateBoard?.uri) {
        const onSuccess = onSuccessEditBoardAction.bind(res?.updateBoard?.uri)
        onSuccess(res?.updateBoard?.uri)
        closeEditDashboardModal()
      }
    } catch (error) {
      console.error(error);
    }
  }

  const onRemoveColumn = useCallback((col: Record<string, string | boolean>) => {
    removedColumns.current.push(col)
  }, [])

  return (
    <Form
      initialValues={initialValues}
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

            <ColumnsField submitting={submitting} onRemoveColumn={onRemoveColumn} />

            <SubmitButton submitting={submitting} text="Create New Board" />
          </Stack>
        </form>
      )}
    />
  )
}

export default EditBoardForm
