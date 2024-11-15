import React from 'react'
import { ActionIcon, Group, Modal, Stack, Title } from '@mantine/core'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import { useSnapshot } from 'valtio';

import { closeHeaderMenu, headerMenuProxy, openHeaderMenu } from '@/stores/header-menu-proxy';
import ColorThemeToggle from '@/components/ColorThemeToggle';
import { currentBoardProxy } from '@/stores/current-board-proxy';

type CurrentBoardProps = {
  children: React.ReactNode
}

const CurrentBoard: React.FC<CurrentBoardProps> = ({ children }) => {
  const { isOpen } = useSnapshot(headerMenuProxy)
  const { board } = useSnapshot(currentBoardProxy.boardData)

  return (
    <Group>
      <Title order={3} h={26} c="white">{board?.name}</Title>

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
