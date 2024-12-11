import React from "react";

import { GetOneBoardByIdQuery } from "@/__generated__/graphql";
import { SimpleGrid } from "@mantine/core";

type BoardColumnsType = {
  columns: GetOneBoardByIdQuery["getOneBoard"]["columns"]["nodes"];
};

const BoardColumns: React.FC<BoardColumnsType> = ({ columns }) => {
  const columnsList = (columns ?? []).map((column) => {
    return (
      <section key={column?.id}>
        <p>{column?.name} ({column?.tasks?.count})</p>

        <ul>
          {(column?.tasks?.nodes ?? []).map(task => (
            <li key={task?.id}>
              <p>{task?.title}</p>
            </li>
          ))}
        </ul>
      </section>
    )
  });

  return (
    <SimpleGrid cols={3}>
      {columnsList}
    </SimpleGrid>
  )
};

export default BoardColumns;
