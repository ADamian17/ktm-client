import React from 'react'
import { ActionIcon, Group, Modal, ScrollArea, Stack, Text, Title } from '@mantine/core'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks';
import ColorThemeToggle from '@/components/ColorThemeToggle';

const CurrentBoard = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Group>
      <Title order={3} h={26}>Board Name</Title>

      <ActionIcon onClick={open} w={10} h={10} variant='transparent' hiddenFrom='sm'>
        {opened ? <IconChevronUp color="#6741d9" /> : <IconChevronDown color="#6741d9" />}
      </ActionIcon>

      <Modal opened={opened} onClose={close} hiddenFrom='sm' withCloseButton={false}>
        <Stack style={{ height: "50vh" }}>
          <Text>All Boards (3)</Text>

          <ScrollArea h="100%">
            ... content
          </ScrollArea>

          <ColorThemeToggle />
        </Stack>
      </Modal>
    </Group>
  )
}

export default CurrentBoard
