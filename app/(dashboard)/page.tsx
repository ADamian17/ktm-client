"use client"
import Link from "next/link";
import { Anchor } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconLayoutBoard } from "@tabler/icons-react";
import { useState } from "react";

import styles from './page.module.scss'

const data = [
  { link: '', label: 'Notifications', icon: IconLayoutBoard },
  { link: '', label: 'Billing', icon: IconLayoutBoard },
  { link: '', label: 'Security', icon: IconLayoutBoard },
  { link: '', label: 'SSH Keys', icon: IconLayoutBoard },
  { link: '', label: 'Databases', icon: IconLayoutBoard },
  { link: '', label: 'Authentication', icon: IconLayoutBoard },
  { link: '', label: 'Other Settings', icon: IconLayoutBoard }
];

export default function Home() {
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState('Billing');
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const links = data.map((item) => (
    <Anchor
      component={Link}
      className={styles.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={styles.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Anchor>
  ));

  const user = {
    name: 'Jane Spoonfighter',
    email: 'janspoon@fighter.dev',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
  };

  return (
    // <AppShell
    //   header={{ height: { base: 60, md: 70, lg: 80 } }}
    //   navbar={{
    //     width: { base: 200, md: 300 },
    //     breakpoint: 'sm',
    //     collapsed: { mobile: !opened },
    //   }}
    //   padding="md"
    // >
    //   <AppShellHeader>
    //     <Group h="100%" px="md">
    //       <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

    //       <Group justify="space-between">
    //         Logo

    //         <Menu
    //           width={260}
    //           position="bottom-end"
    //           transitionProps={{ transition: 'pop-top-right' }}
    //           onClose={() => setUserMenuOpened(false)}
    //           onOpen={() => setUserMenuOpened(true)}
    //           withinPortal={false}
    //           closeOnItemClick={false}
    //         >
    //           <MenuTarget>
    //             <UnstyledButton>
    //               <Group gap={7}>
    //                 <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
    //                 <Text fw={500} size="sm" lh={1} mr={3}>
    //                   {user.name}
    //                 </Text>
    //                 <IconChevronDown style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
    //               </Group>
    //             </UnstyledButton>
    //           </MenuTarget>

    //           <MenuDropdown>
    //             <MenuLabel>Account</MenuLabel>
    //             <MenuDivider />
    //             <MenuItem
    //               leftSection={
    //                 <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
    //               }
    //             >
    //               Logout
    //             </MenuItem>

    //             <MenuDivider />
    //             <MenuItem onClick={() => console.log('click')}>
    //               <Group justify="center">
    //                 <IconSun
    //                   style={{ width: rem(16), height: rem(16) }}
    //                   stroke={2.5}
    //                   fill="currentColor"
    //                 />

    //                 <Switch color="violet" />

    //                 <IconMoonStars
    //                   style={{ width: rem(16), height: rem(16) }}
    //                   stroke={2.5}
    //                   fill="currentColor"
    //                 />
    //               </Group>
    //             </MenuItem>
    //           </MenuDropdown>
    //         </Menu>
    //       </Group>
    //     </Group>
    //   </AppShellHeader>

    //   {/* <AppShellNavbar p="md">
    //     <AppShellSection grow my="md" component={ScrollArea}>
    //       {links}
    //     </AppShellSection>

    //     <AppShellSection>
    //       <Card>
    //         <Group justify="center">
    //           <IconSun
    //             style={{ width: rem(16), height: rem(16) }}
    //             stroke={2.5}
    //             fill="currentColor"
    //           />

    //           <Switch color="violet" />

    //           <IconMoonStars
    //             style={{ width: rem(16), height: rem(16) }}
    //             stroke={2.5}
    //             fill="currentColor"
    //           />
    //         </Group>
    //       </Card>
    //     </AppShellSection>
    //   </AppShellNavbar> */}

    //   <AppShellMain>
    //   </AppShellMain>
    // </AppShell>
    <>
      Main
    </>
  );
}
