import { Routes, Route } from "react-router";
import Ticket from "../compoennt/ticket/ticket";
import DateSelector from "../compoennt/date-select/date-select";
import Luggage from "../compoennt/luggage/luggage";
import Seat from "../compoennt/seat/seat";
import Payment from "../compoennt/payment/payment";

const AirTicketsRoutes = () => {
  return (
    <Routes>
      <Route index element={<DateSelector />} />
      <Route path="ticket" element={<Ticket />} />
      <Route path="luggage" element={<Luggage />} />
      <Route path="seat" element={<Seat />} />
      <Route path="payment" element={<Payment />} />
    </Routes>
  );
};

export default AirTicketsRoutes;
