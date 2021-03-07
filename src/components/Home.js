import React, { useState } from "react";
import BodySurfaceArea from "./BodySurfaceArea";

function Home() {
  const [height, setHeight] = useState(0);

  const [weight, setWeight] = useState(0);

  return (
    <div className="Home__container">
      <h2 className="Home__h2">Adicionar dados do paciente:</h2>
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
