import P from 'prop-types';
import { useEffect, useRef, useState } from 'react';

export const ButtonPage = ({ onClick }) => {
  const [valueButton, setValueButton] = useState(null);
  const inputApiRick = useRef();
  const inputApiPlaceholderOnePost = useRef();
  const inputApiPlaceholderAllPosts = useRef();

  useEffect(() => {
    setValueButton('1');
  }, []);

  const handleClick = (value) => {};

  return (
    <div className="button-render">
      <h2>Escolha a Opção para Renderizar a Page</h2>
      <button
        ref={inputApiRick}
        type="submit"
        onClick={() => {
          onClick(inputApiRick.current.innerText);
        }}
      >
        API RICK AND MORTY
      </button>
      <button
        ref={inputApiPlaceholderOnePost}
        type="submit"
        onClick={() => {
          onClick(inputApiPlaceholderOnePost.current.innerText);
        }}
      >
        API PLACEHOLDER: PAGE POR POST
      </button>
      <button
        ref={inputApiPlaceholderAllPosts}
        type="submit"
        onClick={() => {
          onClick(inputApiPlaceholderAllPosts.current.innerText);
        }}
      >
        API PLACEHOLDER: ALL POSTS
      </button>
    </div>
  );
};

ButtonPage.propTypes = {
  onClick: P.func.isRequired,
};
