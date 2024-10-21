import React from 'react'
import { AppShellHeader, Divider, Group } from '@mantine/core';
import ActionsMenu from './ActionsMenu';
import AddNewTaskCta from './AddNewTaskCta';
import CurrentBoard from './CurrentBoard';
import Logo from './Logo';

const DashboardLayoutHeader = () => (
  <AppShellHeader>
    <Group align='center' justify='space-between' h="100%" pl={24} pr={24}>
      <Group align='center' h="100%">
        <Logo />
        <Divider orientation="vertical" visibleFrom="sm" ml="lg" />
        <CurrentBoard />
      </Group>

      <Group>
        <AddNewTaskCta />

        <ActionsMenu />
      </Group>
    </Group>
  </AppShellHeader>
)

export default DashboardLayoutHeader
