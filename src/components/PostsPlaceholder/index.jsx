import { useContext, useEffect, useRef } from 'react';
import { CounterContext } from '../../contexts/CounterProvider/context';
import { loadPosts } from '../../contexts/PostsPlaceholderProvider/actions';

import { PostsContext } from '../../contexts/PostsPlaceholderProvider/context';
import { decrementCounter, incrementCounter } from '../../contexts/CounterProvider/actions';

export const PostsPlaceHolder = () => {
  const isMounted = useRef(true);

  const contextPosts = useContext(PostsContext);
  const { postsState, postsDispatch } = contextPosts;

  const contextCunter = useContext(CounterContext);
  const { counterState, counterDispatch } = contextCunter;

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
    <div className="PostsPlaceHolder">
      <button
        onClick={() => {
          incrementCounter(counterDispatch);
        }}
      >
        Counter: {counterState.counter}+
      </button>
      <button
        onClick={() => {
          decrementCounter(counterDispatch);
        }}
      >
        Counter: {counterState.counter}-
      </button>
      {!!postsState.loading && <p>Carregando posts</p>}
      {!postsState.loading &&
        postsState.posts.map((p) => (
          <div key={p.id} className={'post-id-' + p.id}>
            <h2>{p.title}</h2>
            <p>{p.body}</p>
          </div>
        ))}
      {!postsState.loading && postsState.posts <= 0 && <p>Não há posts</p>}
    </div>
  );
};
