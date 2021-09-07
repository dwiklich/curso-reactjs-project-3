import P from 'prop-types';
import { useDebugValue, useEffect, useState } from 'react';

const useMediaQuery = (queryValue) => {
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

export const Home = ({ children }) => {
  const huge = useMediaQuery('(min-width: 980px)');
  const big = useMediaQuery('(max-width: 979px) and (min-width: 768px)');
  const medium = useMediaQuery('(max-width: 767px) and (min-width: 321px)');
  const small = useMediaQuery('(max-width:320px)');

  const background = huge ? 'GrayText' : big ? 'green' : medium ? 'InfoBackground' : small ? 'white' : null;
  const fontSize = huge ? '36px' : big ? '26px' : medium ? '16px' : small ? '9px' : null;
  return (
    <div className={'home'} style={{ background, fontSize }}>
      <h1> Home </h1>
      <p>Tamanho da tela? {huge}</p>
      <p>Tela Larga: {huge ? 'true' : 'false'}</p>
      {children}
    </div>
  );
};

Home.propTypes = {
  children: P.element,
};
