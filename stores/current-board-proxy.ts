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
