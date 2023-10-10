import "./style.css";
type selectedSeats = {
  selectedSeats: number;
};

const SeatSelectionPage = ({ selectedSeats }: selectedSeats) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const seatRowCount = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const seatArray: string[] = [];

  const seatSelectionFunc = (rowName: string, seatNumber: number) => {
    for (let i = 0; i <= selectedSeats; i++) {
      if (seatArray.length < selectedSeats && seatNumber <= numbers.length) {
        console.log(seatArray.length);
        if (seatNumber <= numbers.length) {
          const element: HTMLCollectionOf<Element> = document.getElementsByClassName(
            `${rowName + seatNumber}`
          );
          seatArray.push(`${rowName + seatNumber}`);

          for (let i = 0; i < element.length; i++) {
            const elementStyle = element[i] as HTMLElement;
            elementStyle.style.backgroundColor = "#f04364";
          }
        }
      }
      seatNumber++;
    }
  };

  const seatBookedConditionFunc = (rowName: string, seatNumber: number) => {
    if (seatArray.length === selectedSeats) {
      for (let i = 0; i <= seatArray.length; i++) {
        const element = document.getElementsByClassName(seatArray[i]);

        for (let i = 0; i < element.length; i++) {
          const elementStyle = element[i] as HTMLElement;
          elementStyle.style.backgroundColor = "";
        }
      }
      seatArray.length = 0;
      seatSelectionFunc(rowName, seatNumber);
      return;
    } else {
      seatSelectionFunc(rowName, seatNumber);
    }
  };

  const confirmedSeatArray = (rowName: string, seatNumber: number) => {
    const exists = seatArray.includes(`${rowName + seatNumber}`);
    if (!exists) {
      seatBookedConditionFunc(rowName, seatNumber);
    } else {
      seatBookedConditionFunc(rowName, seatNumber);
    }
  };
  return (
    <>
      {seatRowCount.map((item) => (
        <div className="seatCountContainer" key={item}>
          <p className="rowCountAlphabet">{item}</p>
          {numbers.map((number) => (
            <div
              key={number}
              className={`seatCounts seatCounts-selection-page ${
                item + number
              }`}
              onClick={() => {
                confirmedSeatArray(item, number);
              }}
            >
              {number}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
export default SeatSelectionPage;
