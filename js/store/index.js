import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vehicleData: {
      rang: 10
    }
  },
  getters: {
    vehicleData: (state) => state.vehicleData
  },
  actions: {
    async fetchVehicleData({ commit }) {
      const response = await axios.get("/vehicle_data.php");
      commit("setVehicleData", response.data);
    }
  },
  mutations: {
    setVehicleData: (state, vehicleData) => {state.vehicleData = vehicleData}
  }
})
