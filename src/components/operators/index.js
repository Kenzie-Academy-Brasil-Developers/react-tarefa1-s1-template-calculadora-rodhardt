import { UseState } from "react";

function Operators({ HandleOperator }) {
  const [operations, setOperations] = useState(["+", "-", "x", "/"]);

  return (
    <ul className="operators">
      {operations.map((element, index) => (
        <li>
          <button
            key={index}
            onClick={() => {
              HandleOperator();
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
