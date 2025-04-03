export class OrderDetail {
  /**
   * 票種
   *
   * @type {TicketType}
   * @memberof OrderDetail
   */
  ticketType: TicketType = TicketType.ROUND_TRIP;

  /**
   * 出發機票資訊
   *
   * @type {Date}
   * @memberof Time
   */
  departureTicketInfo?: TicketInfo;

  /**
   * 返程機票資訊
   *
   * @type {Date}
   * @memberof Time
   */
  returnTicketInfo?: TicketInfo;

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

  /**
   * 總金額
   *
   * @readonly
   * @type {number}
   * @memberof OrderDetail
   */
  get totalPrice(): string {
    const departureTotalPrice = (
      this.departureTicketInfo?.extraPrice ?? []
    ).reduce((prev, current) => {
      return prev + current.price;
    }, 0);

    const returnTotalPrice = (this.returnTicketInfo?.extraPrice ?? []).reduce(
      (prev, current) => {
        return prev + current.price;
      },
      0
    );

    return Intl.NumberFormat().format(
      (this.departureTicketInfo?.ticketPrice ?? 0) +
        (this.returnTicketInfo?.ticketPrice ?? 0) +
        departureTotalPrice +
        returnTotalPrice
    );
  }
}

export interface TicketInfo {
  /**
   * 出發日期
   *
   * @type {Date}
   * @memberof TicketInfo
   */
  departureDate: Date;

  /**
   * 出發地點
   *
   * @type {AirportLocation}
   * @memberof TicketInfo
   */
  departureLocation?: AirportLocation;

  /**
   * 抵達日期
   *
   * @type {Date}
   * @memberof TicketInfo
   */
  arrivalDate: Date;

  /**
   * 抵達地點
   *
   * @type {AirportLocation}
   * @memberof TicketInfo
   */
  arrivalLocation?: AirportLocation;

  /**
   * 票價
   *
   * @type {number}
   * @memberof TicketInfo
   */
  ticketPrice: number;

  /**
   * 額外票價
   *
   * @type {ExtraPrice}
   * @memberof TicketInfo
   */
  extraPrice?: ExtraPrice[];
}

/**
 * 額外票價
 *
 * @export
 * @interface ExtraPrice
 */
export interface ExtraPrice {
  /**
   * 名稱
   *
   * @type {string}
   * @memberof ExtraPrice
   */
  name: string;

  /**
   * 價格
   *
   * @type {number}
   * @memberof ExtraPrice
   */
  price: number;
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
