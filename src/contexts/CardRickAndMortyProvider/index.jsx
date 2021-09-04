import P from 'prop-types';
import { useReducer, useState } from 'react';

import { CardRickAndMortyContext } from './context';
import { data } from './data';
import { reducer } from './reducer';

export const CardRickAndMorty = (children) => {
  const [state, dispatch] = useReducer(reducer, data);

  return <CardRickAndMortyContext.Provider value={{ state, dispatch }}>{children}</CardRickAndMortyContext.Provider>;
};

CardRickAndMorty.propTypes = {
  children: P.node.isRequired,
};
