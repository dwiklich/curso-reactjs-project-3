import * as types from './types';

export const reducer = (state, actions) => {
  switch (actions.type) {
    case types.INCREMENT_COUNTER: {
      const { counter } = state;
      // return { ...state, counter: (c) => c + 1 };
      return { ...state, counter: counter + 1 };
    }

    case types.DECREMENT_COUNTER: {
      const { counter } = state;
      // return { ...state, counter: (c) => c - 1 };
      return { ...state, counter: counter - 1 };
    }
    default: {
      console.log('NENHUMA ACTION FOI DISPARADA', actions.type);
    }
  }
  return { ...state };
};
