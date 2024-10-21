import { ActionIcon, Modal, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { IconPlus } from '@tabler/icons-react'
import React from 'react'

const AddNewTaskCta = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <ActionIcon variant='filled' color="violet" onClick={open} radius="lg" w="fit-content" p="md">
        <IconPlus size={14} />

        <Text visibleFrom="md">
          Add new task
        </Text>
      </ActionIcon>

      <Modal opened={opened} onClose={close} title="Add new task" centered>
        Modal content
      </Modal>

    </>
  )
}

export default AddNewTaskCta
