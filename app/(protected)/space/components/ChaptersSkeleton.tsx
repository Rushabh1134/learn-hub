import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ChaptersSkeleton = () => {
  return (
    <Skeleton className="bg-muted pb-2  m-4 rounded-lg gap-4rounded-lg p-4">
      <div className="mt-5">
        <Skeleton className="w-[130px] h-[10px] bg-secondary/10" />
        <div className="mt-4">
          <Skeleton className="w-full h-[10px] bg-secondary/10" />
        </div>
      </div>
    </Skeleton>
  );
};

export default ChaptersSkeleton;
