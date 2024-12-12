import { GetOneBoardByIdQuery } from "@/__generated__/graphql";
import { proxy } from "valtio";

interface CurrentBoardState {
  boardData: {
    board: GetOneBoardByIdQuery["getOneBoard"] | null;
  };
}

export const currentBoardProxy = proxy<CurrentBoardState>({
  boardData: {
    board: null,
  },
});

export const resetCurrentBoard = () => {
  currentBoardProxy.boardData.board = null;
};

export const getStatusSelectOptions = () => {
  return (currentBoardProxy.boardData.board?.columns.nodes ?? []).map(
    (col) => ({
      value: col?.id ?? "",
      label: col?.name ?? "",
    }),
  );
};
