import React, { useState } from "react";
import {
  calculateBSADubois,
  calculateBSAMosteller,
} from "../utils/bsa-formulae";
import CVP from "./CVP";

function Home() {
  const DUBOIS = "dubois";
  const MOSTELLER = "mosteller";

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bsa, setBsa] = useState(0);
  // const [bsaOption, setBsaOption] = useState(DUBOIS);

  const handleBSAOptions = (e) => {
    const option = e.target.value;

    switch (option) {
      case DUBOIS:
        setBsa(calculateBSADubois(height, weight));
        break;
      case MOSTELLER:
        setBsa(calculateBSAMosteller(height, weight));
        break;
      default:
        setBsa(0);
        break;
    }
  };

  return (
    <div className="home__container">
      <h2 className="home__h2">Adicionar dados do paciente:</h2>
      <form className="home__basic__form">
        <div className="home__form-item">
          <label htmlFor="weight" className="home__label">
            Peso (kg):
          </label>
          <input
            type="text"
            className="home__input"
            name="weight"
            id="weight"
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="home__form-item">
          <label htmlFor="weight" className="home__label">
            Altura (cm):
          </label>
          <input
            type="text"
            className="home__input"
            name="height"
            id="height"
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <select
          onChange={handleBSAOptions}
          name="bsa-options"
          id="bsa-options"
          className="home__select"
        >
          <option value="" selected disabled hidden>
            Fórmula para calcular superfície corporal{" "}
          </option>
          <option value="dubois" className="home__option">
            Dubois
          </option>
          <option value="mosteller" className="home__option">
            Mosteller
          </option>
        </select>
        <p className="home__p">
          Superfície corporal: {bsa.toFixed(3)} m<sup>2</sup>
        </p>
      </form>

      <CVP bsa={bsa} />
    </div>
  );
}

export default Home;

// TODO: colocar as referências dos cálculos de BSA
