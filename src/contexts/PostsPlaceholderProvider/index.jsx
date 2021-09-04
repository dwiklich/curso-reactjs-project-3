import { useContext, useReducer } from 'react';
import P from 'prop-types';

import { PostsContext } from './context';
import { data } from './data';
import { reducer } from './reducer';
import { loadPosts } from './actions';

export const PostsPlaceholderProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(reducer, data);

  // const loadAllPosts = async () => {
  //   await loadPosts(postsDispatch);
  // };

  return <PostsContext.Provider value={{ postsState, postsDispatch }}>{children}</PostsContext.Provider>;
};

PostsPlaceholderProvider.propTypes = {
  children: P.node.isRequired,
};
