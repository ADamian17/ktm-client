"use client"
import React from 'react'
import { AppShellHeader, Divider, Group } from '@mantine/core';
import ActionsMenu from './ActionsMenu';
import AddNewTaskCta from './AddNewTaskCta';
import CurrentBoard from './CurrentBoard';
import Logo from './Logo';

type DashboardLayoutHeaderProps = {
  children: React.ReactNode
}

const DashboardLayoutHeader: React.FC<DashboardLayoutHeaderProps> = ({ children }) => (
  <AppShellHeader>
    <Group align='center' justify='space-between' h="100%" pl={24} pr={24}>
      <Group align='center' h="100%">
        <Logo />
        <Divider orientation="vertical" visibleFrom="sm" ml="lg" />
        <CurrentBoard>
          {children}
        </CurrentBoard>
      </Group>

      <Group>
        <AddNewTaskCta />

        <ActionsMenu />
      </Group>
    </Group>
  </AppShellHeader>
)

export default DashboardLayoutHeader
