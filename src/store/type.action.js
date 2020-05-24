import { breeds, dogs } from './type.mutation';
import { fetchBreedsApi, fetchDogsByBreedApi } from '../api/api.dogs';

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
export const fetchDogsByBreed = fetchEntity(dogs, fetchDogsByBreedApi);