import { useEffect, useCallback, useRef } from 'react';

const useInfiniteScroll = (
  loading: boolean,
  onLoadMore: () => void,
  query: string
) => {
  const lastScrollTopRef = useRef<number>(0);
  const prevQueryRef = useRef<string | null>(null);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    const { scrollY, innerHeight } = window;
    const { scrollHeight } = document.body;

    if (innerHeight + scrollY >= scrollHeight - 200 && !loading) {
      onLoadMore();
    }
  }, [loading, onLoadMore]);

  const debouncedHandleScroll = useCallback(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      handleScroll();
    }, 200);
  }, [handleScroll]);

  useEffect(() => {
    if (prevQueryRef.current !== query) {
      window.scrollTo(0, 0);
      prevQueryRef.current = query;
      lastScrollTopRef.current = 0;
    }

    window.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [debouncedHandleScroll, query]);
};

export default useInfiniteScroll;
