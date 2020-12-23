export const SET_FLATS = 'SET_FLATS';
export const SELECT_FLAT = 'SELECT_FLAT';

export function setFlats() {
  const promise = fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
    .then(response => response.json());
  return {
    type: SET_FLATS,
    payload: promise
  };
}


export function selectFlat(flat) {
  return {
    type: SELECT_FLAT,
    payload: flat
  };
}
