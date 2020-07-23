import VehicleDataBean from "./VehicleDataBean";
import VehicleDataFinder from "./VehicleDataFinder";

export default class VehicleDataFactory {

  private _vehicleDataFinder: VehicleDataFinder;

  constructor(vehicleDataFinder: VehicleDataFinder = null) {
    if (vehicleDataFinder === null) {
      this._vehicleDataFinder = new VehicleDataFinder("https://live.sonice.at/vehicle_data.php");
    }
  }


  get vehicleDataFinder(): VehicleDataFinder {
    return this._vehicleDataFinder;
  }

  set vehicleDataFinder(value: VehicleDataFinder) {
    this._vehicleDataFinder = value;
  }

  public createEmptyVehicleData() : VehicleDataBean
  {
    return new VehicleDataBean();
  }

  public async createVehicleData() : Promise<VehicleDataBean>
  {
    let dataMap = await this.vehicleDataFinder.findVehicleData();
    let vehicleData = this.createEmptyVehicleData();
    vehicleData.displayName = dataMap.display_name;
    vehicleData.chargePower = dataMap.charger_power;
    vehicleData.odometer = dataMap.vehicle_state.odometer;

    console.log(dataMap);
    return vehicleData;
  }
}
