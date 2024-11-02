import React, { useEffect } from 'react'
import { ActionIcon, Group, Modal, Stack, Title } from '@mantine/core'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks';
import ColorThemeToggle from '@/components/ColorThemeToggle';
import { usePathname } from 'next/navigation';

type CurrentBoardProps = {
  children: React.ReactNode
}

const CurrentBoard: React.FC<CurrentBoardProps> = ({ children }) => {
  const pathname = usePathname();
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (opened) {
      close()
      return
    }
  }, [pathname, close]) // eslint-disable-line

  return (
    <Group>
      <Title order={3} h={26}>Board Name</Title>

      <ActionIcon onClick={open} w={10} h={10} variant='transparent' hiddenFrom='sm'>
        {opened ? <IconChevronUp color="#6741d9" /> : <IconChevronDown color="#6741d9" />}
      </ActionIcon>

      <Modal opened={opened} onClose={close} hiddenFrom='sm' withCloseButton={false}>
        <Stack style={{ height: "50vh" }}>
          {children}
          <ColorThemeToggle />
        </Stack>
      </Modal>
    </Group>
  )
}

export default CurrentBoard
