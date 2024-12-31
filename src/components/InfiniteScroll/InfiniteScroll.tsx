import React, { useEffect, useRef, useState } from 'react';
import { Spinner } from '../Spinner/Spinner';

interface InfiniteScrollProps {
  loadMore: () => Promise<void>;
  hasMore: boolean;
  children: React.ReactNode;
  className?: string;
}

export function InfiniteScroll({
  loadMore,
  hasMore,
  children,
  className = ''
}: InfiniteScrollProps) {
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          setIsLoading(true);
          await loadMore();
          setIsLoading(false);
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [loadMore, hasMore, isLoading]);

  return (
    <div className={className}>
      {children}
      <div ref={observerTarget} className="h-4 w-full">
        {isLoading && (
          <div className="flex justify-center py-4">
            <Spinner type="circle" size="md" />
          </div>
        )}
      </div>
    </div>
  );
}