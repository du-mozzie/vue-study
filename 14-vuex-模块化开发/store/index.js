import Vue from 'vue'
import Vuex from 'vuex'

import countAbout from './modules/count'
import personAbout from './modules/person'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        countAbout,
        personAbout
    }
})
