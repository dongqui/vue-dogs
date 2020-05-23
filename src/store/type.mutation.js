const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

const createFetchTypes = (base) => {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
		acc[type] = `_FETCH_${base}_${type}`
		return acc
	}, {})
}



const mutaion = (mutaion, payload = {}) => {
  return { mutaion, payload }
}

