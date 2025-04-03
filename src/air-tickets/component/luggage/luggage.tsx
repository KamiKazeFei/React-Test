import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./luggage.scss";

const Luggage = () => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { user?: { id: number; name: string } };
    console.log(state);
  }, []);

  return (
    <>
      <div>Luggage</div>
    </>
  );
};

export default Luggage;
