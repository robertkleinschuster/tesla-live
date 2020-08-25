export default class VehicleDataBean {

  private _error: boolean;

  private _displayName: string;
  private _odometer: number;
  private _range: number;
  private _speed: number;
  private _power: number;
  private _consumption: number;
  private _onlineState: string;
  private _chargeState: string;
  private _charging: string;
  private _chargePower: string;
  private _chargeRate: string;
  private _outsideTemp: string;
  private _insideTemp: string;
  private _fastCharger: string;
  private _fastChargerType: string;
  private _fastChargerPresent: string;
  private _fullyChargedIn: string;
  private _lastUpdate: string

  private _locationLatitude: number = 0;
  private _locationLongitute: number = 0;

  private _batteryPercent: number;
  private _batteryRange: number;


  get error(): boolean {
    return this._error;
  }

  set error(value: boolean) {
    this._error = value;
  }

  get locationLongitute(): number {
    return this._locationLongitute;
  }

  set locationLongitute(value: number) {
    this._locationLongitute = value;
  }

  get locationLatitude(): number {
    return this._locationLatitude;
  }

  set locationLatitude(value: number) {
    this._locationLatitude = value;
  }


  get batteryPercent(): number {
    return this._batteryPercent;
  }

  set batteryPercent(value: number) {
    this._batteryPercent = value;
  }

  get batteryRange(): number {
    return this._batteryRange;
  }

  set batteryRange(value: number) {
    this._batteryRange = value;
  }

  get chargeRate(): string {
    return this._chargeRate;
  }

  set chargeRate(value: string) {
    this._chargeRate = value;
  }

  get power(): number {
    return this._power;
  }

  set power(value: number) {
    this._power = value;
  }

  get fastChargerPresent(): string {
    return this._fastChargerPresent;
  }

  set fastChargerPresent(value: string) {
    this._fastChargerPresent = value;
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
