import HandleSetCurrentBoard from "@/components/HandleSetCurrentBoard";
import { getOneBoardByUri } from "@/utils/board";
import { notFound } from "next/navigation";

const BoardPage = async ({ params }: { params: Promise<{ boardUri: string }> }) => {
  const { boardUri } = await params;
  const data = await getOneBoardByUri(boardUri);

  if (!data?.getOneBoard?.id) {
    return notFound();
  }

  return (
    <>
      <HandleSetCurrentBoard board={data.getOneBoard} />
      <pre>
        {JSON.stringify(data, undefined, 3)}
      </pre>
    </>
  );
}

export default BoardPage;
