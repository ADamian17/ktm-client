import React from 'react'
import { ActionIcon, Group, Modal, Stack, Title } from '@mantine/core'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import { useSnapshot } from 'valtio';

import { closeHeaderMenu, headerMenuProxy, openHeaderMenu } from '@/stores/headerMenuProxy';
import ColorThemeToggle from '@/components/ColorThemeToggle';

type CurrentBoardProps = {
  children: React.ReactNode
}

const CurrentBoard: React.FC<CurrentBoardProps> = ({ children }) => {
  const { isOpen } = useSnapshot(headerMenuProxy)

  return (
    <Group>
      <Title order={3} h={26}>Board Name</Title>

      <ActionIcon onClick={openHeaderMenu} w={10} h={10} variant='transparent' hiddenFrom='sm'>
        {isOpen ? <IconChevronUp color="#6741d9" /> : <IconChevronDown color="#6741d9" />}
      </ActionIcon>

      <Modal opened={isOpen} onClose={closeHeaderMenu} hiddenFrom='sm' withCloseButton={false}>
        <Stack style={{ height: "50vh" }}>
          {children}
          <ColorThemeToggle />
        </Stack>
      </Modal>
    </Group>
  )
}

export default CurrentBoard
