import React, { useState } from "react";
import {
  calculateBSADubois,
  calculateBSAMosteller,
} from "../utils/bsa-formulae";
import CVP from "./CVP";

function Home() {
  const DUBOIS = "dubois";
  const MOSTELLER = "mosteller";
  const CVP_protocol = "CVP";

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bsa, setBsa] = useState(0);
  const [protocol, setProtocol] = useState("");

  const handleBSAOptions = (e) => {
    const option = e.target.value;
    let tempBsa = 0;

    switch (option) {
      case DUBOIS:
        tempBsa = calculateBSADubois(height, weight);
        break;
      case MOSTELLER:
        tempBsa = calculateBSAMosteller(height, weight);
        break;
      default:
        setBsa(0);
        break;
    }

    if (tempBsa > 2) tempBsa = 2;
    setBsa(tempBsa);
  };

  // const handleProtocolOptions = (e) => {
  //   const option = e.target.value;
  //   let tempProtocol = "";

  //   switch (option) {
  //     case CVP_protocol:
  //       tempProtocol = "<CVP bsa={bsa} />";
  //       break;
  //     default:
  //       break;
  //   }

  //   setProtocol(tempProtocol);
  // };

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

        <select
          onChange={(e) => setProtocol(e.target.value)}
          name="bsa-options"
          id="bsa-options"
          className="home__select"
        >
          <option value="" selected disabled hidden>
            Escolha o protocolo{" "}
          </option>
          <option value="CVP" className="home__option">
            CVP
          </option>
          <option value="TalCyDex" className="home__option">
            TalCyDex
          </option>
          <option value="ABVD" className="home__option">
            ABVD
          </option>
          <option value="CyBorD" className="home__option">
            CyBorD
          </option>
        </select>
      </form>
      <p className="home__p">
        Superfície corporal considerada: {bsa.toFixed(3)} m<sup>2</sup>
      </p>
      {protocol === CVP_protocol ? <CVP bsa={bsa} /> : ""}

      {/* <CVP bsa={bsa} /> */}
    </div>
  );
}

export default Home;

// TODO: colocar as referências dos cálculos de BSA
