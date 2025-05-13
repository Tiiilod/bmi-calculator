import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) return;

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters ** 2)).toFixed(1);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setCategory("Kurus");
    } else if (bmiValue < 25) {
      setCategory("Normal");
    } else if (bmiValue < 30) {
      setCategory("Gemuk");
    } else {
      setCategory("Obesitas");
    }
  };

  return (
    <div className="container">
      <h1>Kalkulator BMI</h1>
      <input
        type="number"
        placeholder="Berat badan (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Tinggi badan (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Hitung BMI</button>

      {bmi && (
        <div className="result">
          <p>BMI: {bmi}</p>
          <p>Kategori: {category}</p>
        </div>
      )}
    </div>
  );
}

export default App;
