import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./App.route";
import Home from "./home/home";

function App() {
  return (
    <BrowserRouter>
      <Home />
      <div className="p-5 ">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
