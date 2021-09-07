import { useDebugValue, useEffect, useState } from 'react';

export const useMediaQuery = (queryValue) => {
  const [match, setMatch] = useState(false);

  useDebugValue(`Query: ${queryValue}`, (name) => {
    return name + ' modified';
  });

  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      if (!isMounted) return;
      setMatch(!!matchMedia.matches);
    };

    matchMedia.addEventListener('change', handleChange);
    setMatch(!!matchMedia.matches);

    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);

  return match;
};
