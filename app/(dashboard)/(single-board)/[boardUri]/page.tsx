import { notFound } from "next/navigation";
import { getOneBoardByUri } from "@/utils/board";
import EmptyBoardColumns from "@/components/EmptyBoardColumns";
import HandleSetCurrentBoard from "@/components/HandleSetCurrentBoard";
import BoardColumns from "@/components/BoardColumns";

export const dynamic = 'force-dynamic';

const BoardPage = async ({ params }: { params: Promise<{ boardUri: string }> }) => {
  const { boardUri } = await params;
  const data = await getOneBoardByUri(boardUri);

  if (!data?.getOneBoard?.id) {
    return notFound();
  }

  const { columns } = data.getOneBoard

  return (
    <>
      <HandleSetCurrentBoard board={data.getOneBoard} />

      {columns.count <= 0 ? <EmptyBoardColumns /> : <BoardColumns columns={columns.nodes} />}
    </>
  );
}

export default BoardPage;
