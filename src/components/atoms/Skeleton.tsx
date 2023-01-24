import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={266}
      height={278}
      viewBox="0 0 266 268"
      backgroundColor="#ffffff"
      foregroundColor="#bdbcbc"
    >
      <rect x="8" y="6" rx="8" ry="8" width="266" height="268" />
    </ContentLoader>
  );
};

export default Skeleton;
