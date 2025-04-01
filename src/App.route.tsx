import { Route, Routes } from "react-router";
import AirTicketsRoutes from "./air-tickets/router/air-tickets.route";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/air-tickets/*" element={<AirTicketsRoutes />} />
    </Routes>
  );
};

export default AppRoutes;
