import React, { useState } from "react";

function Home() {
  const [patientData, setPatientData] = useState({ weight: 0, height: 0 });

  const handleChange = (e) => {
    console.log(
      "🚀 ~ file: AddPatientData.js ~ line 8 ~ handleChange ~ e",
      e.target.name,
      e.target.value
    );
    const tempData = patientData;
    tempData[e.target.name] = e.target.value;
    setPatientData(tempData);
  };

  return (
    <div className="Home__container">
      <h1 className="Home__title">Adicionar dados do paciente:</h1>
      <form className="Home__form">
        <label htmlFor="weight" className="Home__label">
          Peso (kg):
        </label>
        <input
          type="text"
          className="Home__form"
          name="weight"
          id="weight"
          onChange={handleChange}
        />
      </form>
      <h2>weight: {patientData.weight}</h2>
      <h2>height: {patientData.height}</h2>
    </div>
  );
}

export default Home;
