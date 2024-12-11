import React from "react";

import { ActionIcon, Center, Stack, Text } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

const EmptyBoardColumns: React.FC = () => {
  return (
    <Center maw="100%" h="82dvh">
      <Stack align="center">
        <Text>
          This board is empty. Create a new column to get started.
        </Text>

        <ActionIcon variant='filled' color="violet" radius="lg" w="fit-content" p="md">
          <IconPlus size={14} />

          <Text>
            Add New Column
          </Text>
        </ActionIcon>
      </Stack>
    </Center>
  )
};

export default EmptyBoardColumns;