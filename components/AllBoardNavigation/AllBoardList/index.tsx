"use client";
import React from 'react'
import Link from 'next/link';
import { Anchor, Button } from '@mantine/core';
import { IconLayoutBoard } from '@tabler/icons-react';
import { usePathname } from 'next/navigation'
import { AllBoardsNavigationQuery } from '@/__generated__/graphql';

import styles from "./AllBoardList.module.scss";
import { openCreateDashboardModal } from '@/stores/create-dashboard-modal-proxy';
import { closeAsideMenu } from '@/stores/aside-menu-proxy';
import { closeHeaderMenu } from '@/stores/header-menu-proxy';

type AllBoardListProps = {
  boards: AllBoardsNavigationQuery['getAllBoards']['nodes']
}

const AllBoardList: React.FC<AllBoardListProps> = ({ boards }) => {
  const pathname = usePathname();

  const handleOpenCreateBoardModal = () => {
    closeAsideMenu();
    closeHeaderMenu()
    openCreateDashboardModal();
  }

  const handleLinkClick = () => {
    closeAsideMenu()
    closeHeaderMenu()
  }

  return (
    <div>
      {(boards ?? []).map((item) => (
        <Anchor
          component={Link}
          className={styles.link}
          data-active={item?.uri === pathname || undefined}
          href={item?.uri ?? ''}
          key={item?.id ?? ''}
          onClick={handleLinkClick}
        >
          <IconLayoutBoard className={styles.linkIcon} stroke={1.5} />
          <span>{item?.name}</span>
        </Anchor>
      ))}

      <Button c='violet' variant='transparent' className={styles.createNewBoardCta} h="fit-content" onClick={handleOpenCreateBoardModal}>
        <IconLayoutBoard className={styles.linkIcon} stroke={1.5} color='#9775fa' />
        <span>Create new dashboard</span>
      </Button>
    </div>
  )
}

export default AllBoardList
