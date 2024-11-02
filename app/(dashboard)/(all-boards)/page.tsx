import { AllBoardsDocument } from "@/__generated__/graphql";
import { executeApiReq } from "@/utils/executeApiReq";
import { ActionIcon, Anchor, Card, CardSection, Container, Divider, Group, Menu, MenuDropdown, MenuItem, MenuTarget, rem, SimpleGrid, Text } from "@mantine/core";
import { IconDots, IconEqual } from "@tabler/icons-react";
import Link from "next/link";

export default async function Home() {
  const data = await executeApiReq(AllBoardsDocument);

  if (!data?.getAllBoards?.nodes) return null;

  const { count, nodes: allBoards } = data.getAllBoards

  return (
    <Container p="0" size="lg">
      <Group pt="xl" pb="xl">
        <Group gap={4}>
          <IconEqual />
          <Text>My boards</Text>
        </Group>

        <Divider orientation="vertical" />
        <Text>{count}</Text>
      </Group>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
        {
          allBoards.map((board) => (
            <Card key={board?.id} withBorder shadow="sm" radius="md">
              <CardSection withBorder inheritPadding py="xs">
                <Group justify="space-between">
                  <Anchor component={Link} href={board?.uri ?? ''} prefetch>
                    <Text fw={500}>{board?.name}</Text>
                  </Anchor>

                  <Menu withinPortal position="bottom-end" shadow="sm">
                    <MenuTarget>
                      <ActionIcon variant="subtle" color="gray">
                        <IconDots style={{ width: rem(16), height: rem(16) }} />
                      </ActionIcon>
                    </MenuTarget>

                    <MenuDropdown>
                      <MenuItem>Edit Board</MenuItem>
                      <MenuItem color="red">Delete Board</MenuItem>
                    </MenuDropdown>
                  </Menu>
                </Group>
              </CardSection>

              <Text mt="sm" c="dimmed" size="sm">
                columns: {board?.columns?.count}
              </Text>
            </Card>
          ))
        }
      </SimpleGrid>
    </Container>
  );
}
