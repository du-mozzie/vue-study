export default {
    namespaced: true,
    actions: {
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
        },
    },
    mutations: {
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
        },
    },
    state: {
        sum: 0,
        school: '福建工程学院',
        subject: 'vue',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
}
