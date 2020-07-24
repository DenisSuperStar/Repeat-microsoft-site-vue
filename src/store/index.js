import Vue from 'vue'
import Vuex from 'vuex'
import userModule from '../add_store/user.js'
import generalModule from '../add_store/general.js'

Vue.use(Vuex)

export default new Vuex.Store({
 modules: {
   generalModule,
   userModule
 }
})
