import { Suspense } from "react";

const BoardPage = ({ params }: { params: Promise<{ boardId: string }> }) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>BoardPage: {JSON.stringify(params)} </Suspense>
  );
}

export default BoardPage;
