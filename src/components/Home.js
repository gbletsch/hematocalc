import React, { useState } from "react";
import {
  calculateBSADubois,
  calculateBSAMosteller,
} from "../utils/bsa-formulae";
import BodySurfaceArea from "./BodySurfaceArea";
import CVP from "./CVP";

function Home() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bsa, setBsa] = useState(0);
  const [bsaOption, setBsaOption] = useState("dubois");

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
        <label htmlFor="bsa-options" className="home__label">
          Fórmula para calcular superfície corporal:
        </label>
        <select
          onChange={(e) => setBsaOption(e.target.value)}
          name="bsa-options"
          id="bsa-options"
          className="home__select"
        >
          <option value="dubois" className="home__option">
            Dubois
          </option>
          <option value="mosteller" className="home__option">
            Mosteller
          </option>
        </select>
        <p className="home__p">
          Superfície corporal:{" "}
          {bsaOption === "dubois"
            ? calculateBSADubois(height, weight).toFixed(3)
            : bsaOption === "mosteller"
            ? calculateBSAMosteller(height, weight).toFixed(3)
            : null}{" "}
          m<sup>2</sup>
        </p>
      </form>
      <BodySurfaceArea weight={weight} height={height} />
      <CVP />
    </div>
  );
}

export default Home;

// TODO: colocar as referências dos cálculos de BSA
