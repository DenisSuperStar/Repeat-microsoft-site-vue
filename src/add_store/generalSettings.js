export default {
    state: {
        isErrorExist: false,
        errorCode: '200',
        errorMessage: 'Success'
    },
    getters: {
        CHECK_ERROR_EXIST: state => {
            return state.isErrorExist;
        },
        READ_ERROR_CODE: state => {
            return state.errorCode;
        },
        READ_ERROR_MESSAGE: state => {
            return state.errorMessage;
        }
    },
    mutations: {
        UPDATE_STATUS_ERROR: (state, payload) => {
          state.isErrorExist = payload;
        },
        UPDATE_STATE_ERROR_CODE: (state, payload) => {
            state.errorCode = payload;
        },
        UPDATE_ERROR_MESSAGE: (state, payload) => {
            state.errorMessage = payload;
        }
    },
    actions: {
        PROCESSING_UPDATE_STATUS_ERROR ({commit}, payload) {
          commit('UPDATE_STATUS_ERROR', payload);  
        },
        PROCESSING_UPDATE_STATE_ERROR_CODE ({commit}, payload) {
            commit('UPDATE_STATE_ERROR_CODE', payload);
        },
        PROCESSING_UPDATE_ERROR_MESSAGE ({commit}, payload) {
            commit('UPDATE_ERROR_MESSAGE', payload);
        }
    }
}