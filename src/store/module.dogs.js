import { fetchBreeds, FETCH_BREEDS } from './type.action';
import { BREEDS } from './type.mutation';

 
const state = {
  breedList: {},
  breed: null,
}

const getters = {

}

const actions = {
  [FETCH_BREEDS]: fetchBreeds,
}

const mutations = {
  [BREEDS.REQUEST]() {
    console.log('request start')
  },
  [BREEDS.SUCCESS](state, res) {    
    state.breedList = res.message;
  },
  [BREEDS.FAILURE](error) {
    console.log(error);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};