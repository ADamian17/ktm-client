"use server";

import {
  CreateTaskDocument,
  CreateTaskMutation,
  CreateTaskMutationVariables,
} from "@/__generated__/graphql";
import { executeApiReq } from "@/utils/executeApiReq";

export const createTaskAction = async ({
  title,
  description,
  columnId,
}: CreateTaskMutationVariables): Promise<
  CreateTaskMutation | { error: string } | undefined
> => {
  try {
    const res = await executeApiReq(CreateTaskDocument, {
      title,
      description,
      columnId,
    });

    return res;
  } catch (error) {
    if (error instanceof Error) {
      const splitMsg = error.message.split(",");
      const msg = splitMsg.length > 1 ? splitMsg[0] : error.message;

      return { error: msg };
    }
  }
};
