import './style.css'
import React, { useState } from "react";

type seatCount = {
  setSelectedSeats: React.Dispatch<
    React.SetStateAction<{ numberOfSeats: number; confirmedSeats: boolean }>
  >;
};

const NumberOfSeats = ({ setSelectedSeats }: seatCount) => {
  const [tempSeatCount, setTempSeatCount] = useState(2);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 


  return (
    <div
      className="seatSelectionContainer"
    >
      <div
        className='seatSelectionHeading'>
        <h3>Select Number Of Seats</h3>
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div
        className='seatCountContainer'
      >
        {numbers.map((number) => (
          <div
            className='seatCounts seatCounts-count-page'
            style={{
              backgroundColor: number === tempSeatCount ? "#F04364" : "",
            }}
            key={number}
            onClick={() => {
              setTempSeatCount(number);
            }}

          >
            {number}
          </div>
        ))}
      </div>
      <div style={{ flex: 0.2 }}>
        <button
          style={{ padding: "10px 100px", background: "#F04364" }}
          onClick={() =>
            setSelectedSeats((prev) => {
              return { ...prev, numberOfSeats: tempSeatCount, confirmedSeats: true };
            })
          }

        >
          Select Seats
        </button>
      </div>
    </div>
  );
};

export default NumberOfSeats;
