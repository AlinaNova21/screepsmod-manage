import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
// import users from './modules/users'

const store = new Vuex.Store({
  // modules: {
    // users
  // },
  state: {
    users: []
  },
  actions: {
    async getUsers ({ commit }) {
      // let { data } = await axios.get('/api/manage/users')
      function ISODate(v) { return new Date(v) }
      let data = [
        { "_id" : "5968109480db070014a3c8b9", "cpu" : 100, "cpuAvailable" : 10000, "registeredDate" : ISODate("2017-07-14T00:30:12.645Z"), "credits" : 0, "gcl" : 33324381, "username" : "ags131", "usernameLower" : "ags131", "active" : 10000, "badge" : { "type" : { "path1" : "M 33.000828,17.214462 L 64.122526,16.778639 L 83.867328,40.838831 L 77.366995,71.277223 L 49.51641,85.173085 L 21.287633,72.062549 L 13.937507,41.818117 Z", "path2" : "M 50.243199,25.921787 L 39.377817,52.831102 H 61.148232 Z M 45.722565,18.714579 H 54.803484 L 77.366995,72.786735 H 69.039512 L 63.646477,58.915579 H 36.958883 L 31.565847,72.786735 H 23.119402 Z" }, "color1" : "#ff9d00", "color2" : "#ffec00", "color3" : "#000000", "param" : 0, "flip" : false }, "lastUsedCpu" : 27, "lastUsedDirtyTime" : 49, "lastNotifyDate" : 1515643409475, "password" : true, "customBadge" : { "path1" : "M 33.000828,17.214462 L 64.122526,16.778639 L 83.867328,40.838831 L 77.366995,71.277223 L 49.51641,85.173085 L 21.287633,72.062549 L 13.937507,41.818117 Z", "path2" : "M 50.243199,25.921787 L 39.377817,52.831102 H 61.148232 Z M 45.722565,18.714579 H 54.803484 L 77.366995,72.786735 H 69.039512 L 63.646477,58.915579 H 36.958883 L 31.565847,72.786735 H 23.119402 Z" }, "activeSegments" : [ 0 ], "activeForeignSegment" : { "username" : "Bovius" }, "rooms" : [ "E25S18", "E28S17" ], "cpuMin" : 100 },
        { "_id" : "59682c4880db070014a3c8c1", "steam" : { "id" : "76561197990896240" }, "cpu" : 100, "cpuAvailable" : 10000, "registeredDate" : ISODate("2017-07-14T02:28:24.203Z"), "credits" : 0, "gcl" : 76027755, "username" : "anisoptera", "usernameLower" : "anisoptera", "active" : 10000, "badge" : { "type" : 19, "color1" : "#000000", "color2" : "#420083", "color3" : "#eac9fd", "param" : -63, "flip" : true }, "lastUsedCpu" : 10, "lastUsedDirtyTime" : 22, "lastNotifyDate" : 1515120670293, "password" : true, "activeForeignSegment" : { "username" : "Bovius" }, "rooms" : [ "E4S3" ], "cpuMin" : 100 },
        { "_id" : "59685408a84e1f001508d92e", "steam" : { "id" : "76561197970852887" }, "cpu" : 100, "cpuAvailable" : 10000, "registeredDate" : ISODate("2017-07-14T05:18:00.162Z"), "credits" : 0, "gcl" : 136762671, "username" : "KamiKatze", "usernameLower" : "kamikatze",  "active" : 0, "badge" : { "type" : 24, "color1" : "#000077", "color2" : "#5555dd", "color3" : "#9999ff", "param" : 0, "flip" : false }, "lastUsedCpu" : 5, "lastUsedDirtyTime" : 11, "activeSegments" : [ 0 ], "lastNotifyDate" : 1510930851804, "money" : 17582572020.000042, "activeForeignSegment" : { "username" : "Bovius" }, "rooms" : [ ], "cpuMin" : 100 },
        { "_id" : "596856baa84e1f001508d930", "steam" : { "id" : "76561197972165801" }, "cpu" : 100, "cpuAvailable" : 10000, "registeredDate" : ISODate("2017-07-14T05:29:30.954Z"), "credits" : 0, "gcl" : 10037211, "username" : "Esryok", "usernameLower" : "esryok",  "active" : 0, "badge" : { "type" : 23, "color1" : "#000000", "color2" : "#440000", "color3" : "#440000", "param" : -100, "flip" : false }, "lastUsedCpu" : 5, "lastUsedDirtyTime" : 10, "password" : true, "lastNotifyDate" : 1509987642049, "activeSegments" : [ 0 ], "activeForeignSegment" : { "username" : "Bovius" }, "cpuMin" : 100 },
        { "_id" : "59685dd3a84e1f001508d937", "steam" : { "id" : "76561198052011081" }, "cpu" : 30, "cpuAvailable" : 10000, "registeredDate" : ISODate("2017-07-14T05:59:47.255Z"), "credits" : 0, "gcl" : 0, "username" : "artch", "usernameLower" : "artch", "active" : 0, "badge" : { "type" : 17, "color1" : "#260d0d", "color2" : "#d926cf", "color3" : "#5b2e6b", "param" : -27, "flip" : false }, "lastUsedCpu" : 1, "lastUsedDirtyTime" : 19, "password" : true,  "lastNotifyDate" : 1502485229152 },
      ]
      commit('SET_USERS', data)
    }
  },
  mutations: {
    SET_USERS (state, users) {
      state.users = users
    }
  },
  getters: {}
})


export default store
