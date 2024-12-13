import React from 'react'
import { ActionIcon, Modal, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { IconPlus } from '@tabler/icons-react'
import CreateTaskForm from '@/components/TaskForms/CreateTaskForm';
import { usePathname } from 'next/navigation';

const AddNewTaskCta = () => {
  const pathname = usePathname();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <ActionIcon variant='filled' color="violet" onClick={open} radius="lg" w="fit-content" p="md">
        <IconPlus size={14} />

        <Text visibleFrom="md">
          Add new task
        </Text>
      </ActionIcon>

      <Modal
        centered
        onClose={close}
        opened={opened}
        size={480}
        title="Add new task"
        withCloseButton={false}
      >
        <CreateTaskForm closeModal={close} pathname={pathname} />
      </Modal>
    </>
  )
}

export default AddNewTaskCta
