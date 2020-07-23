import Vue from "vue";
import Vuex, {ActionContext} from "vuex";
import VehicleDataFactory from "../models/VehicleData/VehicleDataFactory";
import VehicleDataBean from "../models/VehicleData/VehicleDataBean";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    vehicleData: new VehicleDataFactory().createEmptyVehicleData()
  },
  getters: {
    vehicleData: (state) : VehicleDataBean => state.vehicleData
  },
  actions: {
    async fetchVehicleData({ commit })
    {
       commit("setVehicleData", await new VehicleDataFactory().createVehicleData());
    }
  },
  mutations: {
    setVehicleData: (state, vehicleData: VehicleDataBean) => {
      state.vehicleData = vehicleData
    }
  }
});
