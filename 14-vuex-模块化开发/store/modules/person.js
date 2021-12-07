export default {
    namespaced: true,
    actions: {
        addPerson(context, value) {
            context.commit('ADD_PERSON', value)
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
            sessionStorage.setItem('personList', JSON.stringify(state.personList))
        }
    },
    state: {
        personList: JSON.parse(sessionStorage.getItem('personList')) ? JSON.parse(sessionStorage.getItem('personList')) : []
    },
    getters: {},
}
