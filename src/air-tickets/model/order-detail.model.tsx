export class OrderDetail {
  /**
   * 票種
   *
   * @type {TicketType}
   * @memberof OrderDetail
   */
  ticketType: TicketType = TicketType.ROUND_TRIP;

  /**
   * 出發時間
   *
   * @type {Date}
   * @memberof Time
   */
  departureTime?: Date;

  /**
   * 到站時間
   *
   * @type {Date}
   * @memberof Time
   */
  arrivalTime?: Date;

  /**
   * 出發地點
   *
   * @type {AirportLocation}
   * @memberof OrderDetail
   */
  departureLocation?: AirportLocation;

  /**
   * 抵達地點
   *
   * @type {AirportLocation}
   * @memberof OrderDetail
   */
  arrivalLocation?: AirportLocation;

  /**
   * 人數
   *
   * @type {number}
   * @memberof OrderDetail
   */
  adultAmount: number = 0;

  /**
   * 小孩人數
   *
   * @type {number}
   * @memberof OrderDetail
   */
  childAmount: number = 0;

  /**
   * 嬰兒人數
   *
   * @type {number}
   * @memberof OrderDetail
   */
  babyAmount: number = 0;
}

/**
 * 票種
 *
 * @export
 * @enum {number}
 */
export enum TicketType {
  /**
   * 單程
   */
  ONE_WAY = "one_way",

  /**
   * 來回
   */
  ROUND_TRIP = "round_trip",
}

/**
 *
 *
 * @export
 * @interface Location
 */
export interface AirportLocation {
  /**
   * 國家代碼
   *
   * @type {string}
   * @memberof AirportLocation
   */
  countryCode: string;

  /**
   * 機場代碼
   *
   * @type {string}
   * @memberof AirportLocation
   */
  airportCode: string;

  /**
   * 機場名稱
   *
   * @type {string}
   * @memberof AirportLocation
   */
  airportName: string;

  /**
   * 城市名稱
   *
   * @type {string}
   * @memberof AirportLocation
   */
  cityName: string;
}
