export default class VehicleDataBean {
  private _displayName: string;
  private _odometer: number;
  private _range: number;
  private _speed: number;
  private _consumption: number;
  private _onlineState: string;
  private _chargeState: string;
  private _charging: string;
  private _chargePower: string;
  private _outsideTemp: string;
  private _insideTemp: string;
  private _fastCharger: string;
  private _fastChargerType: string;
  private _fullyChargedIn: string;
  private _lastUpdate: string
  private location: {
    latitude: number,
    longitute: number
  }


  get displayName(): string {
    return this._displayName;
  }

  set displayName(value: string) {
    this._displayName = value;
  }

  get odometer(): number {
    return this._odometer;
  }

  set odometer(value: number) {
    this._odometer = value;
  }

  get range(): number {
    return this._range;
  }

  set range(value: number) {
    this._range = value;
  }

  get speed(): number {
    return this._speed;
  }

  set speed(value: number) {
    this._speed = value;
  }

  get consumption(): number {
    return this._consumption;
  }

  set consumption(value: number) {
    this._consumption = value;
  }

  get onlineState(): string {
    return this._onlineState;
  }

  set onlineState(value: string) {
    this._onlineState = value;
  }

  get chargeState(): string {
    return this._chargeState;
  }

  set chargeState(value: string) {
    this._chargeState = value;
  }

  get charging(): string {
    return this._charging;
  }

  set charging(value: string) {
    this._charging = value;
  }

  get chargePower(): string {
    return this._chargePower;
  }

  set chargePower(value: string) {
    this._chargePower = value;
  }

  get outsideTemp(): string {
    return this._outsideTemp;
  }

  set outsideTemp(value: string) {
    this._outsideTemp = value;
  }

  get insideTemp(): string {
    return this._insideTemp;
  }

  set insideTemp(value: string) {
    this._insideTemp = value;
  }

  get fastCharger(): string {
    return this._fastCharger;
  }

  set fastCharger(value: string) {
    this._fastCharger = value;
  }

  get fastChargerType(): string {
    return this._fastChargerType;
  }

  set fastChargerType(value: string) {
    this._fastChargerType = value;
  }

  get fullyChargedIn(): string {
    return this._fullyChargedIn;
  }

  set fullyChargedIn(value: string) {
    this._fullyChargedIn = value;
  }

  get lastUpdate(): string {
    return this._lastUpdate;
  }

  set lastUpdate(value: string) {
    this._lastUpdate = value;
  }
}
