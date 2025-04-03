import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import DetailRow from "../component/detail-row/detail-row";
import store from "../state/store";

const LazyDateSelector = React.lazy(
  () => import("../component/date-select/date-select")
);
const LazyTicket = React.lazy(() => import("../component/ticket/ticket"));
const LazyLuggage = React.lazy(() => import("../component/luggage/luggage"));
const LazySeat = React.lazy(() => import("../component/seat/seat"));
const LazyPayment = React.lazy(() => import("../component/payment/payment"));

const AirTicketsRoutes = () => {
  return (
    <Provider store={store}>
      <DetailRow />
      <Routes>
        <Route index element={<LazyDateSelector />} />
        <Route path="ticket" element={<LazyTicket />} />
        <Route path="luggage" element={<LazyLuggage />} />
        <Route path="seat" element={<LazySeat />} />
        <Route path="payment" element={<LazyPayment />} />
      </Routes>
    </Provider>
  );
};

export default AirTicketsRoutes;
