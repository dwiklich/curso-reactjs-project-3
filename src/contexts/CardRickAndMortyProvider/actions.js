import * as types from './types';

export const loadCardApi = async (dispatch) => {
  dispatch({ type: types.CARD_API_LOADING });

  const cardApiFetch = await fetch('https://rickandmortyapi.com/api/character');
  // const { results } = await cardApiFetch.json();
  const cardApi = await cardApiFetch.json();

  await dispatch({ type: types.CARD_API_SUCCESS, payload: cardApi.results });
};
