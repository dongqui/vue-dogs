import axios from 'axios';

export const fetchBreedsApi = async () => await axios.get('https://dog.ceo/api/breeds/list/all');