import Vue from 'vue'
import Vuex from 'vuex'

import APIService from '../network/api.service'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        passageList: [],
        loading: false
    },
    mutations: {
        setPassageList(state, data) {
            state.passageList = data
        },
        toogleLoading(state, value) {
            state.loading = value
        }
    },
    actions: {
        getPassageList(context) {
            context.commit('toogleLoading', true)
            return APIService.getPassageList()
        }
    },
    modules: {
    }
})
