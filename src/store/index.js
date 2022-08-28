import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) 
const store = new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    add(state,stop){
        
        state.count+=stop
    },
    adds(state,stop){

        state.count-=stop
    }
  },
  actions:{
    addss(consttxte,stop){
        setTimeout(()=>{
            consttxte.commit('adds',stop)
        },2000)

    }
  },
  getters:{
    showname(state){
        return '当前最新数据是 ['+  state.count +']'
    }
  }
})

export default store