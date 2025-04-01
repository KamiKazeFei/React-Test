import { useNavigate } from "react-router-dom";

const Ticket = () => {
  const navigate = useNavigate();
  const gotoLuggage = () => {
    navigate("/air-tickets/luggage", {
      state: { user: { id: 123, name: "John" } },
    });
  };

  return (
    <>
      <div>Ticket</div>
      <button onClick={gotoLuggage}>Go to luggage</button>
    </>
  );
};

export default Ticket;
