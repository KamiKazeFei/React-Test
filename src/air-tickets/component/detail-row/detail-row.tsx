import { useSelector } from "react-redux";
import { OrderDetail } from "../../model/order-detail.model";
import "./detail-row.scss";
import { useEffect } from "react";

const DetailRow = () => {
  let orderDtail = {} as OrderDetail;
  useSelector((state) => (orderDtail = state.orderInfoSlice));

  function togglePanel(event) {
    const panel = document.getElementById("panel");
    if (!panel) {
      return;
    }

    event.stopPropagation();
    if (panel.style.display === "none" || panel.style.display === "") {
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
    }
  }

  useEffect(() => {
    const panel = document.getElementById("panel");

    if (!panel) {
      return;
    }

    // 點擊其他地方時關閉面板
    document.addEventListener("click", function (event) {
      if (panel.style.display === "block") {
        panel.style.display = "none";
      }
    });

    // 防止點擊面板時關閉自己
    panel.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  }, []);

  return (
    <>
      <div className="flex justify-between font-bold pb-4 border-b-4 mb-4 border-teal-600 text-3xl">
        {/* 上一步 */}
        <div>
          <button className="p-2 rounded shadow-2xl cursor-pointer p-5 w-60">
            上一步
          </button>
        </div>

        <div className="flex justify-center items-center dropdown">
          <button
            className="p-2 rounded shadow-2xl cursor-pointer p-5 mr-5 check-detail-btn"
            onClick={togglePanel}
          >
            ▼訂購資訊▼
          </button>
          <div id="panel" className="panel">
            <p>123</p>
            <p>456</p>
            <p>123</p>
            <p>456</p>
            <p>123</p>
            <p>456</p>
            <p>123</p>
            <p>456</p>
            <hr />
            <p>123</p>
            <p>456</p>
            <p>123</p>
            <p>456</p>
            <p>123</p>
            <p>456</p>
            <p>123</p>
            <p>456</p>
            <p>123</p>
            <p>456</p>
            <hr />
            <h3>{"總金額：" + "240000"}</h3>
          </div>
        </div>

        <div>
          <button className="p-2 rounded shadow-2xl cursor-pointer p-5 w-60">
            下一步
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailRow;
