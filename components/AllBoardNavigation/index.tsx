import { Suspense } from "react";
import { ScrollArea, Text } from "@mantine/core";

import { AllBoardsDocument } from "@/__generated__/graphql";
import { executeApiReq } from "@/utils/executeApiReq";
import AllBoardList from "./AllBoardList";

const AllBoardNavigation = async () => {
  const data = await executeApiReq(AllBoardsDocument);

  if (!data?.getAllBoards?.nodes || !data?.getAllBoards?.count) return null;

  const { count, nodes: AllBoards } = data.getAllBoards

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Text>All Boards ({count})</Text>

      <ScrollArea h="100%">
        <AllBoardList boards={AllBoards} />
      </ScrollArea>
    </Suspense>
  )
};

export default AllBoardNavigation;
