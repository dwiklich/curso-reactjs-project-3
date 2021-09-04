import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.CARD_API_LOADING: {
      console.log('CARD_API_LOADING');
      return { ...state, loading: true };
    }

    case types.CARD_API_SUCCESS: {
      console.log('CARD_API_SUCCESS');
      const { payload } = action;
      console.log(payload);
      return { ...state, posts: payload, loading: false };
    }

    case types.CARD_API_ERROR: {
      //...
      return { ...state };
    }

    default:
      console.log('NENHUMA ACTION EXECUTADA');
  }

  console.log('Não foi encontrada ACTION TYPE');
  return { ...state };
};
