import Vue from 'vue'
import Vuex from 'vuex'

import countAbout from '../store/modules/count'
import personAbout from '../store/modules/person'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        countAbout,
        personAbout
    }
})
