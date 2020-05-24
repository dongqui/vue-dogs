const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

const createFetchTypes = (base) => {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
		acc[type] = `FETCH_${base}_${type}`
		return acc
	}, {})
}

export const BREEDS = createFetchTypes('BREEDS');
export const DOGS = createFetchTypes('DOGS');

const mutaion = (mutaion, payload = {}) => {
  return [mutaion, payload]
}

export const breeds = {
  request: () => mutaion(BREEDS[REQUEST]),
  success: (response) => mutaion(BREEDS[SUCCESS], response),
  failure: (error) => mutaion(BREEDS[FAILURE], error)
}

export const dogs = {
  request: () => mutaion(DOGS[REQUEST]),
  success: (response) => mutaion(DOGS[SUCCESS], response),
  failure: (error) => mutaion(DOGS[FAILURE], error)
}