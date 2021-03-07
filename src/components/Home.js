import React, { useState } from "react";
import BodySurfaceArea from "./BodySurfaceArea";

function Home() {
  const [height, setHeight] = useState(0);

  const [weight, setWeight] = useState(0);

  //   const handleWeightChange = () =>
  //   const handleChange = (e) => {
  //     console.log(
  //       "🚀 ~ file: AddPatientData.js ~ line 8 ~ handleChange ~ e",
  //       e.target.name,
  //       e.target.value
  //     );
  //     const tempData = patientData;
  //     tempData[e.target.name] = e.target.value;
  //     setPatientData(tempData);
  //   };

  return (
    <div className="Home__container">
      <h1 className="Home__title">Adicionar dados do paciente:</h1>
      <form className="Home__basic__form">
        <label htmlFor="weight" className="Home__label">
          Peso (kg):
        </label>
        <input
          type="text"
          className="Home__input"
          name="weight"
          id="weight"
          onChange={(e) => setWeight(e.target.value)}
        />
        <label htmlFor="weight" className="Home__label">
          Altura (cm):
        </label>
        <input
          type="text"
          className="Home__input"
          name="height"
          id="height"
          onChange={(e) => setHeight(e.target.value)}
        />
      </form>
      <BodySurfaceArea weight={weight} height={height} />
    </div>
  );
}

export default Home;
