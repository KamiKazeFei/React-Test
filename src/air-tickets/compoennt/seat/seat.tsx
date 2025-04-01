import { useState } from "react";
import "./seat.scss";

const Seat = () => {
  const seatRowNumber = 32;
  const seatColumnNumber = 7;
  const seatAlphabet = ["A", "B", "C", "", "D", "E", "F"];
  const [selectedSeat, setSelectedSeat] = useState<string | undefined>();
  const disableSeat = [
    "6D",
    "15D",
    "16D",
    "17D",
    "18D",
    "19D",
    "20D",
    "21D",
    "22D",
    "23D",
    "24D",
  ];
  const exitRow = [3, 10, 17, 24, 31];

  const onSeatClick = (seat: string) => {
    if (selectedSeat && selectedSeat === seat) {
      setSelectedSeat(undefined);
    } else {
      setSelectedSeat(seat);
    }
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {/* 座位圖 */}
        <div className="plane col-span-2">
          <div className="seat-chosen-container">
            {/* 左機翼 */}
            <div className="left-wing">
              <img src="src/assets/left-wing.svg" width="700px" alt="plane" />
            </div>

            {/* 座位圖 */}
            <div className="seat-area">
              {/* 機頭 */}
              <div className="plane-header">
                <img
                  src="src/assets/plane-header.svg"
                  width="320px"
                  alt="plane"
                />
              </div>

              <div>
                <div className="seat-alphabet-row">
                  {seatAlphabet.map((ele) => (
                    <div className="seat-alphabet">{ele}</div>
                  ))}
                </div>

                {Array(seatRowNumber)
                  .fill(0)
                  .map((_, seatRowIndex) => {
                    const div = (
                      <div
                        key={seatRowIndex}
                        className={
                          "seat-row" +
                          (exitRow.includes(seatRowIndex) ? " exit-row" : "")
                        }
                      >
                        {Array(seatColumnNumber)
                          .fill(0)
                          .map((_, index) => {
                            if (index === 3) {
                              return (
                                <div className="row-number" key={index}>
                                  {seatRowIndex + 1}
                                </div>
                              );
                            }
                            const seat = (index + 1) % 3;
                            const label =
                              (seatRowIndex + 1).toString() +
                              seatAlphabet[index];

                            const isDisabled = disableSeat.includes(label);

                            let className = isDisabled
                              ? "disabled-seat"
                              : selectedSeat === label
                              ? " selected-seat"
                              : "";

                            if (!isDisabled) {
                              if (seat === 0) {
                                className += " high-level-seat-container";
                              } else if (seat === 1) {
                                className += " middle-level-seat-container";
                              } else if (seat === 2) {
                                className += " low-level-seat-container";
                              }
                            }
                            return (
                              <div
                                className={className}
                                key={index}
                                onClick={() =>
                                  !isDisabled ? onSeatClick(label) : null
                                }
                              >
                                {!isDisabled ? label : ""}
                              </div>
                            );
                          })}
                      </div>
                    );
                    return div;
                  })}
              </div>

              {/* 機尾 */}
              <div className="plane-tail">
                <img src="src/assets/plane-tail.svg" alt="plane" />
              </div>
            </div>

            {/* 右機翼 */}
            <div className="right-wing">
              <img src="src/assets/right-wing.svg" width="700px" alt="plane" />
            </div>
          </div>
        </div>

        {/* 選位資訊 */}
        <div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Seat;
