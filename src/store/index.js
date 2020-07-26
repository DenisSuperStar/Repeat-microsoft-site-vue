import Vue from 'vue'
import Vuex from 'vuex'
import authSettings from '../add_store/userAuthSettings.js'
import commonSettings from '../add_store/generalSettings.js'
import accountSettings from '../add_store/userAccountSettings.js'

Vue.use(Vuex)

export default new Vuex.Store({
 modules: {
   authSettings,
   commonSettings,
   accountSettings
 }
})
