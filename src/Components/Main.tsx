import  { useState } from "react";
import NumberOfSeats from "./NumberOfSeats";
import SeatSelectionPage from "./SeatSelectionPage";

const Main = () => {
  const [selectedSeats, setSelectedSeats] = useState({
    numberOfSeats: 2,
    confirmedSeats: false,
  });

  return (
    <div>
      {!selectedSeats.confirmedSeats ? (
        <NumberOfSeats setSelectedSeats={setSelectedSeats} />
      ) : (
        <SeatSelectionPage selectedSeats={selectedSeats.numberOfSeats}  />
      )}
    </div>
  );
};

export default Main;
