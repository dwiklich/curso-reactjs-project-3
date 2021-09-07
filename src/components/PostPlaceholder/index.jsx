import { useEffect, useRef, useState } from 'react';
import { Post } from '../../components/Post';
// import { useFetch } from './use-fetch';

export const PostPlaceholder = () => {
  const [page, setPage] = useState(null);
  const input = useRef();

  const handleClick = (id) => {
    setPage(id);
  };

  useEffect(() => {}, [page]);

  // 1234
  return (
    <div>
      <label htmlFor="input">
        Insira o numero da Page:
        <input ref={input} type="number" name="input-id" id="input" />
        <button
          type="submit"
          onClick={() => {
            handleClick(Number(input.current.value));
          }}
        >
          Enviar
        </button>
      </label>
      {page > 0 ? <Post pageRender={page} /> : <h1>Roi...Leticia, neh?</h1>}
    </div>
  );
};
