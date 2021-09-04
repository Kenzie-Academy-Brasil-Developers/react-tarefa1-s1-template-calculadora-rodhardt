import { useState } from "react";

function NumberChanger({ HandleFirstNumber, HandleSecondNumber }) {
  const [numbersAndModifiers, setNumbersAndModifiers] = useState([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "-",
  ]);

  return (
    <ul className="numberAndModifiers">
      {numbersAndModifiers.map((element, index) => (
        <li>
          <button
            key={index}
            onClick={() => {
              HandleFirstNumber();
              HandleSecondNumber();
            }}
          >
            {element}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default NumberChanger;