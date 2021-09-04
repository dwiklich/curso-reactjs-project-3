import { useContext, useEffect, useRef, useState } from 'react';
import { loadCardApi } from '../../contexts/CardRickAndMortyProvider/actions';
import { CardRickAndMortyContext } from '../../contexts/CardRickAndMortyProvider/context';

import { loadPosts } from '../../contexts/PostsPlaceholderProvider/actions';
import { PostsContext } from '../../contexts/PostsPlaceholderProvider/context';
import { data } from '../../contexts/PostsPlaceholderProvider/data';
import './styles.css';

function App() {
  const isMounted = useRef(true);
  const context = useContext(PostsContext);
  const { postsState, postsDispatch } = context;

  const contextAPi = useContext(CardRickAndMortyContext);
  const { apiState, apiDispatch } = CardRickAndMortyContext;

  // useEffect(() => {
  //   loadCardApi(apiDispatch);
  // });

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);

  return (
    // <PostsProvider>
    <div className="App">
      <h1>Hello</h1>
      <h1>123</h1>
      <button
        onClick={() => {
          setTimeout(() => {
            console.log(context);
          }, 2000);
        }}
      >
        Click-me
      </button>
      <div className="PostsApiRick"></div>
      <div className="PostsPlaceHolder">
        {!!postsState.loading && <p>Carregando posts</p>}
        {!postsState.loading && postsState.posts.map((p) => <p key={p.id}>{p.title}</p>)}
        {!postsState.loading && postsState.posts <= 0 && <p>Não há posts</p>}
      </div>
    </div>
    // </PostsProvider>
  );
}

export default App;
