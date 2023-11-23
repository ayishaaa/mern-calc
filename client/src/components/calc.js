import React, { useState } from "react";
import axios from "axios";

function Calc() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [result, setResult] = useState("");

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleAddition = () => {
    const sum = Number(num1) + Number(num2);
    setResult(sum);

    const data = {
      num1: num1,
      num2: num2,
      result: sum
    };

    axios.post("http://localhost:3000/add", data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  

  return (
    <div>
      <label htmlFor="num1">Number 1:</label>
      <input type="number" id="num1" value={num1} onChange={handleNum1Change} />
      <br />
      <label htmlFor="num2">Number 2:</label>
      <input type="number" id="num2" value={num2} onChange={handleNum2Change} />
      <br />
      <button onClick={handleAddition}>Add</button>
      <br />
      <label htmlFor="result">Result:</label>
      <input type="number" id="result" value={result} readOnly />
    </div>
  );
}

export default Calc;
