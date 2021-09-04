import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_LOADING: {
      console.log('POSTS LOADING');
      return { ...state, loading: true };
    }

    case types.POSTS_SUCCESS: {
      console.log('POSTS_SUCCESS');
      const { payload } = action;
      console.log(payload);
      return { ...state, posts: payload, loading: false };
    }

    case types.POSTS_ERROR: {
      //...
      return { ...state };
    }

    default:
      console.log('NENHUMA ACTION EXECUTADA');
  }

  console.log('Não foi encontrada ACTION TYPE');
  return { ...state };
};
