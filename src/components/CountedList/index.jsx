import P from 'prop-types';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

export const CountedList = forwardRef(function CountedList({ counted }, ref) {
  const [rand, setRand] = useState('0.24');
  const divRef = useRef();

  const handleClick = () => {
    setRand(Math.random().toFixed(2));
  };

  useImperativeHandle(ref, () => ({
    handleClick,
    divRef: divRef.current,
  }));

  return (
    <div
      ref={divRef}
      className="counter-list"
      style={{ height: '200px', width: '200px', overflowY: 'scroll', margin: '0 auto' }}
    >
      <ul className="counted">
        {counted.map((counter, index) => {
          return (
            <li key={index}>
              <p>{counter}</p>
              <p onClick={handleClick}>{rand}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

CountedList.propTypes = {
  counted: P.array.isRequired,
};
