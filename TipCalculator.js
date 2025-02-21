import React, { useState } from "react";

const TipCalculator = () => {
  const [bill, setBill] = useState();
  const [tipPercentage, setTipPercentage] = useState(0);
  const [people, setPeople] = useState(0);

  const tipAmount = (bill * tipPercentage) / 100;
  const totalAmount = bill + tipAmount;
  const perPerson = totalAmount / people;

  return (
    <div className="back">
      <label className="block">Bill</label><br></br>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        className="inBox"
      />
      
      <div className="range">
        <label className="block1">Tip %</label>
        <input
          type="range"
          min="0"
          max="100"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(Number(e.target.value))}
          className="w-full"
        />
        <p className="text">{tipPercentage}%</p>
      </div>
      
      <div className="range1">
        <label className="block2">No. of people</label>
        <input
          type="range"
          min="1"
          max="50"
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
          className="w-full"
        />
        <p className="text1">{people}</p>
      </div>
      
      <div className="blocked">
        <p>Tip: ₹{tipAmount.toFixed(2)}</p>
        <p>Total: ₹{totalAmount.toFixed(2)}</p>
        <p>Each Person Pay: ₹{perPerson.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default TipCalculator;
