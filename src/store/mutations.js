const REMBER_ANSWER = 'REMBER_ANSWER'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
const ADD_NUM = 'ADD_NUM'

export default {
  [REMBER_ANSWER](state, payload){
    state.answerid[state.itemNum] = payload.id
  },

  [ADD_NUM](state, payload) {
    state.itemNum += payload.num
  },

  [INITIALIZE_DATA](state){
    state.itemNum = 1;
    state.allTime = 0;
  }

}
