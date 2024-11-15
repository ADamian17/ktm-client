"use client";
import { GetOneBoardByIdQuery } from "@/__generated__/graphql";
import { currentBoardProxy } from "@/stores/current-board-proxy";
import React, { useEffect } from "react";

type HandleSetCurrentBoardType = {
  board: GetOneBoardByIdQuery['getOneBoard'];
};

const HandleSetCurrentBoard: React.FC<HandleSetCurrentBoardType> = ({ board }) => {
  useEffect(() => {
    currentBoardProxy.boardData.board = board;
  }, [board])

  return null;
};

export default HandleSetCurrentBoard;
