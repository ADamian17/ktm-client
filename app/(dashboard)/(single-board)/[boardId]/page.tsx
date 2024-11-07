const BoardPage = ({ params }: { params: Promise<{ boardId: string }> }) => {
  return (
    <>BoardPage: {JSON.stringify(params)} </>
  );
}

export default BoardPage;
