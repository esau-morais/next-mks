import { Skeleton } from "@/components";

const Loading = () => {
  return (
    <>
      {Array.from(Array(5).keys()).map((key) => (
        <Skeleton key={key} />
      ))}
    </>
  );
};

export default Loading;
