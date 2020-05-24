import { fetchBreeds, fetchDogsByBreed } from './type.action';
import { BREEDS, DOGS } from './type.mutation';

 
const state = {
  breedList: [],
  breedSubList: {},
  breed: null,
  dogsPhotoList: [],
  selectedDog: null,
}

const getters = {

}

const actions = {
  fetchBreeds, fetchDogsByBreed
}

const mutations = {
  [BREEDS.REQUEST]() {
    console.log('breeds request start')
  },
  [BREEDS.SUCCESS](state, res) {        
    state.breedList = Object.keys(res.message);

    const subListObj = {};
    for (const [ key, value ] of Object.entries(res.message)) {
      if (value.length) {
        subListObj[key] = value;
      }
    }
    state.subBreedList = subListObj;
  },
  [BREEDS.FAILURE](error) {
    console.log(error);
  },


  [DOGS.REQUEST]() {
    console.log('dogs request start')
  },
  [DOGS.SUCCESS](state, res) {  
    state.dogsPhotoList = res.message;
  },
  [DOGS.FAILURE](error) {
    console.log(error);
  },


}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};