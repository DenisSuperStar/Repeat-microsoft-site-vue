export default {
    state: {
        isAuthenticated: false
    },
    getters: {
        CHECK_STATUS_AUTH: state => {
            return state.isAuthenticated;
        }
    },
    mutations: {
        SET_STATUS_AUTH: state => {
            state.isAuthenticated = true;
        }
    },
    actions: {
        PROCESSING_SET_STATUS_AUTH ({commit}) {
            commit('SET_STATUS_AUTH');
        }
    }
}