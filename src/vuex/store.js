import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0
}

const mutations = {
    add (state, n) {
        state.count+=n;
    },
    // add (state) {
    //     state.count++
    // },
    reduce (state) {
        state.count--
    }
}

//  过滤器
const getters = {
    count: function (state) {
        return state.count+=100;
    }
}

// action异步修改状态
const actions = {
    addAction (context) {
        context.commit('add',10)
        setTimeout(()=>{context.commit('reduce')},3000);
        console.log('我比reduce提前执行！')
    },
    reduceAction ({commit}) {
        commit('reduce')
    }
}

export default new Vuex.Store({
    state,
    mutations,
    // getters,
    actions
})