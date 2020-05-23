import { breeds } from './type.mutation';
import { fetchBreedsApi } from '../api/api.dogs';

export const FETCH_BREEDS = 'FETCH_BREEDS';

const fetchEntity = (entity, apiFn) => async (context, params) => {
  context.commit(...entity.request())
  try {
    const response = await apiFn(params);    
    context.commit(...entity.success(response.data))
  } catch (e) {
    context.commit(...entity.failure(e))
  }
}

export const fetchBreeds = fetchEntity(breeds, fetchBreedsApi);