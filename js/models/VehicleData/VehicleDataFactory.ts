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

    if (dataMap.error) {
      vehicleData.error = true;
    } else {
      vehicleData.displayName = dataMap.display_name;
      vehicleData.odometer = dataMap.vehicle_state.odometer;
      vehicleData.onlineState = dataMap.state;
      vehicleData.speed = dataMap.drive_state.speed;
      vehicleData.batteryPercent = dataMap.vehicle_state.usable_battery_level;
      vehicleData.batteryRange = dataMap.vehicle_state.est_battery_range;
      vehicleData.locationLatitude = dataMap.drive_state.latitude;
      vehicleData.locationLongitute = dataMap.drive_state.longitude;
      vehicleData.lastUpdate = dataMap.drive_state.timestamp;
      vehicleData.chargePower = dataMap.charge_state.charger_power;
      vehicleData.chargeState = dataMap.charge_state.charging_state;
      vehicleData.chargeRate = dataMap.charge_state.charge_rate;
      vehicleData.fullyChargedIn = dataMap.charge_state.minutes_to_full_charge;
      vehicleData.fastCharger = dataMap.charge_state.fast_charger_brand;
      vehicleData.fastChargerPresent = dataMap.charge_state.fast_charger_present;
      vehicleData.fastChargerType = dataMap.charge_state.fast_charger_type;
      console.log(vehicleData.batteryPercent);
    }


    console.log(dataMap);
    return vehicleData;
  }
}
