import { useState } from "react";
import "./operators.css";

function Operators({ HandleOperator }) {
  const [operations, setOperations] = useState(["+", "-", "x", "/", "=", "AC"]);

  return (
    <ul className="operators">
      {operations.map((element, index) => (
        <li>
          <button
            key={index}
            onClick={() => {
              HandleOperator(element);
            }}
          >
            {element}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Operators;
