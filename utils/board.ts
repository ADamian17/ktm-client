import { GetOneBoardByIdDocument } from "@/__generated__/graphql";
import { executeApiReq } from "./executeApiReq";

export const getOneBoardByUri = async (boardUri: string) => {
  return await executeApiReq(GetOneBoardByIdDocument, {
    uri: `/${boardUri}/`,
  });
};
