import { ActionIcon, Group, Modal, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import React from 'react'

const CurrentBoard = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Group>
      <Title order={3} h={26}>Board Name</Title>

      <ActionIcon onClick={open} w={10} h={10} variant='transparent' hiddenFrom='sm'>
        {opened ? <IconChevronUp color="#6741d9" /> : <IconChevronDown color="#6741d9" />}
      </ActionIcon>

      <Modal opened={opened} onClose={close} title="All Boards (3)" hiddenFrom='sm' withCloseButton={false}>
        Modal content
      </Modal>
    </Group>
  )
}

export default CurrentBoard
