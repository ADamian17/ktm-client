"use client";
import React from "react";

import { GetOneBoardByIdQuery } from "@/__generated__/graphql";
import { Card, Flex, ScrollArea, Stack, Text } from "@mantine/core";

type BoardColumnsType = {
  columns: GetOneBoardByIdQuery["getOneBoard"]["columns"]["nodes"];
};

const BoardColumns: React.FC<BoardColumnsType> = ({ columns }) => {
  const columnsList = (columns ?? []).map((column) => {
    return (
      <Stack w={280} key={column?.id}>
        <Text mb="xs">{column?.name} ({column?.tasks?.count})</Text>

        <ScrollArea maw="100%" mah="82dvh">
          <Stack>
            {(column?.tasks?.nodes ?? []).map(task => (
              <Card key={task?.id} withBorder>
                <Text fz="md" fw={500} style={{ wordBreak: "break-word" }}>
                  {task?.title}
                </Text>

                <Text fz="sm" c="dimmed" style={{ wordBreak: "break-word" }}>
                  {task?.subtasks.completedSubtasks} of {task?.subtasks.count} subtasks
                </Text>
              </Card>
            ))}
          </Stack>
        </ScrollArea>
      </Stack>
    )
  });

  return (
    <ScrollArea maw="100%">
      <Flex
        align="stretch"
        direction="row"
        gap="md"
        justify="flex-start"
      >
        {columnsList}
      </Flex>
    </ScrollArea>
  )
};

export default BoardColumns;
