import { AllBoardsDocument } from "@/__generated__/graphql";
import { executeApiReq } from "@/utils/executeApiReq";
import { Container, Divider, Group, SimpleGrid, Text } from "@mantine/core";
import { IconEqual } from "@tabler/icons-react";

export default async function Home() {
  const data = await executeApiReq(AllBoardsDocument);

  if (!data?.getAllBoards?.nodes) return null;

  const { count } = data.getAllBoards

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
        <div style={{ backgroundColor: "red" }}>1</div>
        <div style={{ backgroundColor: "red" }}>2</div>
        <div style={{ backgroundColor: "red" }}>3</div>
        <div style={{ backgroundColor: "red" }}>4</div>
        <div style={{ backgroundColor: "red" }}>5</div>
      </SimpleGrid>
    </Container>
  );
}
