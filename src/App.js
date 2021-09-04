import "./App.css";
import { useState } from "react";

import NumberChanger from "./components/numberChangers";
import Operators from "./components/operators";
import Calculations from "./components/calculations";

function App() {
  const [firstNumber, setFirstNumber] = useState("0");
  const [secondNumber, setSecondNumber] = useState("");

  const [operator, setOperator] = useState("");

  const [isOperatorSelected, setIsOperatorSelected] = useState(false);
  const [isNegative, setIsNegative] = useState(false);
  const [isDecimal, setIsDecimal] = useState(false);

  function HandleFirstNumber(n) {
    if (isOperatorSelected) {
      return null;
    }
    if (firstNumber === "0") {
      return setFirstNumber(n);
    }
    if (n === "." && !isDecimal) {
      setIsDecimal(!isDecimal);
      return setFirstNumber(firstNumber.concat(n));
    }
    if (n === "-" && !isNegative) {
      setIsNegative(!isNegative);
      return setFirstNumber(`-${firstNumber}`);
    }
    if (n !== "-" && n !== ".") {
      return setFirstNumber(firstNumber.concat(n));
    }
  }

  function HandleSecondNumber(n) {
    if (!isOperatorSelected) {
      return null;
    }
    if (secondNumber === "0") {
      return setSecondNumber(n);
    }
    if (n === "." && !isDecimal) {
      setIsDecimal(true);
      return setSecondNumber(secondNumber.concat(n));
    }
    if (n === "-" && !isNegative) {
      setIsNegative(true);
      return setSecondNumber(`-${secondNumber}`);
    }
    if (n !== "-" && n !== ".") setSecondNumber(secondNumber.concat(n));
  }

  function HandleOperator(op) {
    setIsNegative(false);
    setIsDecimal(false);

    if (operator === "+" && secondNumber !== "") {
      setFirstNumber(Calculations.sum(firstNumber, secondNumber));
    }
    if (operator === "-" && secondNumber !== "") {
      setFirstNumber(Calculations.subtract(firstNumber, secondNumber));
    }
    if (operator === "x" && secondNumber !== "") {
      setFirstNumber(Calculations.multiply(firstNumber, secondNumber));
    }
    if (operator === "/" && secondNumber !== "") {
      setFirstNumber(Calculations.divide(firstNumber, secondNumber));
    }
    setIsOperatorSelected(true);
    setSecondNumber("");
    setOperator(op);
    if (op === "=") {
      setOperator("");
      setIsOperatorSelected(false);
    }
    if (op === "AC") {
      setFirstNumber("0");
      setSecondNumber("");
      setOperator("");
      setIsOperatorSelected(false);
      setIsNegative(false);
      setIsDecimal(false);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Calculadora</h1>
      </header>
      <section className="calculator">
        <div className="display">
          <p>{firstNumber}</p>
          <p>{operator}</p>
          <p>{secondNumber}</p>
        </div>
        <div className="numbers">
          <h3>Numbers</h3>
          <NumberChanger
            HandleFirstNumber={HandleFirstNumber}
            HandleSecondNumber={HandleSecondNumber}
          />
        </div>
        <div className="operators">
          <h3>Operations</h3>
          <Operators HandleOperator={HandleOperator} />
        </div>
      </section>
    </div>
  );
}

export default App;
