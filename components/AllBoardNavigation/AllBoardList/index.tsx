"use client";
import React from 'react'
import Link from 'next/link';
import { Anchor, Button } from '@mantine/core';
import { IconLayoutBoard } from '@tabler/icons-react';
import { usePathname } from 'next/navigation'
import { AllBoardsNavigationQuery } from '@/__generated__/graphql';

import styles from "./AllBoardList.module.scss";

type AllBoardListProps = {
  boards: AllBoardsNavigationQuery['getAllBoards']['nodes']
}

const AllBoardList: React.FC<AllBoardListProps> = ({ boards }) => {
  const pathname = usePathname();

  const links = (boards ?? []).map((item) => (
    <Anchor
      component={Link}
      className={styles.link}
      data-active={item?.uri === pathname || undefined}
      href={item?.uri ?? ''}
      key={item?.id ?? ''}
    >
      <IconLayoutBoard className={styles.linkIcon} stroke={1.5} />
      <span>{item?.name}</span>
    </Anchor>
  ));

  return (
    <div>
      {links}

      <Button c='violet' variant='transparent' className={styles.createNewBoardCta} h="fit-content">
        <IconLayoutBoard className={styles.linkIcon} stroke={1.5} color='#9775fa' />
        <span>Create new dashboard</span>
      </Button>
    </div>
  )
}

export default AllBoardList
