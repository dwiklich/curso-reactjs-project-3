import { useEffect, useRef, useState } from 'react';
import { ReactHooksChild } from '../ReactHooksChild';

export const ReactHooksParent = () => {
  const renders = useRef(0);

  useEffect(() => {
    renders.current += 1;
  });

  console.log(`%cPARENT RENDER ${renders.current} STARTING...`, 'color: green');
  const [show, setShow] = useState(false);
  console.log('%cState Initializer - (useState + InitialValue) = ' + show, 'color: green');
  console.log(`%cPARENT RENDER ${renders.current} ENDING...`, 'color: green');

  return (
    <div>
      <p style={{ fontSize: '60px' }} onClick={() => setShow((s) => !s)}>
        Show hooks
      </p>
      {show && <ReactHooksChild />}
    </div>
  );
};
