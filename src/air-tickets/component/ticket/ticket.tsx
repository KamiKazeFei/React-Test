import { useDispatch } from "react-redux";
import {
  setReturnTicketInfo,
  setStartTicketInfo,
} from "../../state/air-tickets.store";
import "./ticket.scss";

const Ticket = () => {
  const today = new Date();

  const startTicketInfoList: TicketInfo[] = Array.from(
    { length: 60 },
    (_, i) => ({
      date: new Date(today.getFullYear(), today.getMonth(), i + 1),
      price: (i + 1) * 1000,
    })
  );

  const returnTicketInfoList: TicketInfo[] = Array.from(
    { length: 60 },
    (_, i) => ({
      date: new Date(today.getFullYear(), today.getMonth(), i + 1),
      price: (i + 1) * 1000,
    })
  );

  const dispatch = useDispatch(); // 取得 dispatch 函式

  /**
   * 設定購票開始日期
   *
   * @param {TicketInfo} data
   */
  const setIsStart = (data: TicketInfo) => {
    dispatch(
      setStartTicketInfo({
        price: data.price,
        date: data.date.toLocaleDateString(),
      })
    );
  };

  /**
   * 設定購票回程日期
   *
   * @param {TicketInfo} data
   */
  const setIsReturn = (data: TicketInfo) => {
    dispatch(
      setReturnTicketInfo({
        price: data.price,
        date: data.date.toLocaleDateString(),
      })
    );
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2">
        {/* 去程 */}
        <div className="start-ticket-select-area">
          <div className="grid grid-cols-5">
            <div className="date-select-area">
              {startTicketInfoList.map((data) => {
                return (
                  <div className="date-block" onClick={() => setIsStart(data)}>
                    <label>{data.date.toLocaleDateString()}</label>
                    <br />
                    {new Intl.NumberFormat().format(data.price)}
                  </div>
                );
              })}
            </div>
            {/*  */}
            <div className="col-span-4">
              <div className="w-full"></div>
            </div>
          </div>
        </div>

        {/* 回程 */}
        <div className="return-ticket-select-area">
          <div className="grid grid-cols-5">
            {/*  */}
            <div className="col-span-4">
              <div className="w-full"></div>
            </div>
            <div className="date-select-area">
              {returnTicketInfoList.map((data) => {
                return (
                  <div className="date-block" onClick={() => setIsReturn(data)}>
                    <label>{data.date.toLocaleDateString()}</label>
                    <br />
                    {new Intl.NumberFormat().format(data.price)}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;

/**
 * 票價資訊
 *
 * @interface TicketInfo
 */
interface TicketInfo {
  date: Date;
  price: number;
}
