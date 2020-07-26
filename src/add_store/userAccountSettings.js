export default {
    state: {
        isNewUser: false
    },
    getters: {
        CHECK_STATUS_USER_ACCOUNT: state => {
            return state.isNewUser;
        }
    },
    mutations: {
        SET_STATUS_USER_ACCOUNT: state => {
            state.isNewUser = true;
        }
    },
    actions: {
        PROCESSING_SET_STATUS_USER_ACCOUNT ({commit}) {
            commit('SET_STATUS_USER_ACCOUNT');
        }
    }
}