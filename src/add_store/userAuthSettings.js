export default {
    state: {
        isAuthenticated: false
    },
    getters: {
        READ_AUTH: state => {
            return state.isAuthenticated;
        }
    },
    mutations: {
        UPDATE_STATUS_AUTH: (state, payload) => {
            state.isAuthenticated = payload;
        }
    },
    actions: {
        PROCESSING_COMPLETE_AUTH ({commit}, changeAuth) {
            commit('UPDATE_STATUS_AUTH', changeAuth)
        }
    }
}