import { useEffect, useState } from 'react'
import './InfiniteScrollWrapper.scss'

export function InfiniteScrollWrapper({ children, onScroll }: InfiniteScrollWrapperParams) {

  function getScrollResult(event: any) {
    const container = event.target;

    const yScroll = container.scrollHeight - container.scrollTop;
    const height = container.offsetHeight;
    const yOffset = height - yScroll;

    let reachingBottom = (yOffset == 0 || yOffset == 1);
    let reachingTop = false;

    return { reachingTop, reachingBottom };
  };

  return (
    <div className="list" onScroll={(e) => onScroll(getScrollResult(e))}>
      <div>{children}</div>
    </div>
  )
};

export interface InfiniteScrollOnScrollResult { reachingTop: boolean, reachingBottom: boolean }

interface InfiniteScrollWrapperParams {
  children: JSX.Element;
  onScroll: (res: InfiniteScrollOnScrollResult) => void;
}

export default InfiniteScrollWrapper;