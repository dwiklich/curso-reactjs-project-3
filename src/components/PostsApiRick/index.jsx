import { useEffect, useState } from 'react';
import './styles.css';

export const PostsRick = () => {
  const [counterState, setCounterState] = useState(0);
  const [inputState, setInputState] = useState(0);

  //...

  // useEffect(() => {}, [counterState]);

  // ...

  const increment = () => {
    setCounterState((prevState) => prevState + 1);
    console.log('chegou aq + ');
  };

  const decrement = () => {
    setCounterState((prevState) => prevState - 1);
    console.log('chegou aq - ');
  };

  return (
    <>
      <p className="rick">Posts Rick: {counterState}</p>
      {/* <input type="text" onChange={}/> */}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>aq</p>
    </>
  );
};
