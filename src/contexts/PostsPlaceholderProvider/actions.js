import * as types from './types';

export const loadPosts = async (dispatch) => {
  console.log('actions');
  dispatch({ type: types.POSTS_LOADING });

  const postsFetch = await fetch('https://jsonplaceholder.typicode.com/posts');
  const postsJson = await postsFetch.json();
  console.log(1);

  return () => {
    dispatch({ type: types.POSTS_SUCCESS, payload: postsJson });
  };
};
