import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    jia(context, value) {
        context.commit('JIA', value)
    },
    jian(context, value) {
        context.commit('JIAN', value)
    },
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('JIA_ODD', value)
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA_WAIT', value)
        }, 300);
    }
}

const mutations = {
    JIA(state, value) {
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    },
    JIA_ODD(state, value) {
        state.sum += value
    },
    JIA_WAIT(state, value) {
        state.sum += value
    }
}

const state = {
    sum: 0,
    school: '福建工程学院',
    subject: 'vue',
}

const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
