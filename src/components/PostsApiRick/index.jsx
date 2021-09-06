import { useEffect, useState } from 'react';

import { useAsync } from '../../templates/Home/use-async';
import './styles.css';

const fetchData = async () => {
  throw new Error('Deu erro');
  // await new Promise((r) => setTimeout(r, 2000));
  // const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  // const json = data.json();
  // return json;
};

export const PostsRick = () => {
  const [counterState, setCounterState] = useState(0);
  const [inputState, setInputState] = useState(0);
  const [posts, setPosts] = useState(null);
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  //...

  // useEffect(() => {
  //   reFetchData();
  // }, [reFetchData]);

  // ...

  // const increment = () => {
  //   setCounterState((prevState) => prevState + 1);
  //   console.log('chegou aq + ');
  // };

  // const decrement = () => {
  //   setCounterState((prevState) => prevState - 1);
  //   console.log('chegou aq - ');
  // };

  if (status === 'idle') {
    return <pre>idle: Nada executando</pre>;
  }
  if (status === 'pending') {
    return <pre>pending: Loading...</pre>;
  }
  if (status === 'error' && result === null) {
    return <pre>error: {error.message}</pre>;
  }
  if (status === 'settled' && error === null) {
    return <pre>settled: {JSON.stringify(result, null, 2)}</pre>;
  } //12345

  return 'IXIII';

  // return (
  //   <>
  //     {/* <p className="rick">Posts Rick: {counterState}</p>
  //     <input type="text" onChange={}/>
  //     <button onClick={increment}>+</button>
  //     <button onClick={decrement}>-</button>
  //     <p>aq</p> */}
  //     <pre>{JSON.stringify(result, null, 2)}</pre>
  //   </>
  // );
};
