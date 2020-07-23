import axios from "axios";

export default class VehicleDataFinder
{
  private _url: string;

  /**
   * @return string
   */
  get url(): string {
    return this._url;
  }

  /**
   *
   * @param value
   */
  set url(value: string) {
    this._url = value;
  }

  /**
   *
   * @param url
   */
  constructor(url: string) {
    this.url = url;
  }

  /**
   * @return any
   */
  public async findVehicleData() : Promise<any>
  {
    let response = await axios.get(this.url);
    return response.data;
  }
}
