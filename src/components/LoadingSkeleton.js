import React from "react";
import "../styles/Body.css";
import Skeleton from "react-loading-skeleton";

function LoadingSkeleton() {
  return (
    <div className="skeleton_parent row">
      <Skeleton className="img_tile" />
      <div className="skeleton_titles">
        <Skeleton className="skeleton_name" height={25} width={320} />
        <Skeleton className="skeleton_artist" height={21} width={250} />
      </div>
    </div>
  );
}

export default LoadingSkeleton;
