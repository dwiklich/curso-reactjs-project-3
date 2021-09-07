import P from 'prop-types';
import { useRef } from 'react';
// import { useEffect, useState } from 'react';

export const ButtonPage = ({ onClick }) => {
  // const [valueButton, setValueButton] = useState(null);
  const inputApiRick = useRef();
  const inputApiPlaceholderOnePost = useRef();
  const inputApiPlaceholderAllPosts = useRef();
  const useEffectButton = useRef();
  const errorBoundaries = useRef();

  // useEffect(() => {
  //   setValueButton('1');
  // }, []);

  // const handleClick = (value) => {};

  return (
    <div className="button-render">
      <h2>Escolha a Opção para Renderizar a Page</h2>
      <button
        ref={inputApiRick}
        type="submit"
        id={'inputApiRick'}
        onClick={() => {
          onClick(inputApiRick.current.id);
        }}
      >
        API RICK AND MORTY
      </button>
      <button
        ref={inputApiPlaceholderOnePost}
        type="submit"
        id={'inputApiPlaceholderOnePost'}
        onClick={() => {
          onClick(inputApiPlaceholderOnePost.current.id);
        }}
      >
        API PLACEHOLDER: PAGE POR POST
      </button>
      <button
        ref={inputApiPlaceholderAllPosts}
        type="submit"
        id={'inputApiPlaceholderAllPosts'}
        onClick={() => {
          onClick(inputApiPlaceholderAllPosts.current.id);
        }}
      >
        API PLACEHOLDER: ALL POSTS
      </button>
      <button
        ref={useEffectButton}
        type="submit"
        id={'useEffectButton'}
        onClick={() => {
          onClick(useEffectButton.current.id);
        }}
      >
        UseLayoutEffectComponent
      </button>
      <button
        ref={errorBoundaries}
        type="submit"
        id={'errorBoundaries'}
        onClick={() => {
          onClick(errorBoundaries.current.id);
        }}
        style={{ background: 'red' }}
      >
        Error Boundaries
      </button>
    </div>
  );
};

ButtonPage.propTypes = {
  onClick: P.func.isRequired,
};
