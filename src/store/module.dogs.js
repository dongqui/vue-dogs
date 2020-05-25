import { fetchBreeds, fetchDogsByBreed } from './type.action';
import { BREEDS, DOGS } from './type.mutation';

 
const state = {
  breedList: [],
  breedSubList: {},
  breed: null,
  dogsPhotoList: [],
  selectedDog: null,
  dogsIsLoading: false,
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
    state.dogsIsLoading= true;
  },
  [DOGS.SUCCESS](state, res) {  
    state.dogsPhotoList = res.message;
    state.dogsIsLoading= false;
  },
  [DOGS.FAILURE](error) {
    console.log(error);
    state.dogsIsLoading= false;
  },


}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};