import React, { useState } from "react";
import { calculateBSADubois } from "../utils/bsa-formulae";
import ABVDProtocol from "./ABVD/ABVDProtocol";
import ABVDRegimen from "./ABVD/ABVDRegimen";
import CVPProtocol from "./CVP/CVPProtocol";
import CVPRegimen from "./CVP/CVPRegimen";
import CyBorDProtocol from "./CyBorD/CyBorDProtocol";
import CyBorDRegimen from "./CyBorD/CyBorDRegimen";
import Tab from "./Tab";
import Tabs from "./Tabs";
import TalCProtocol from "./TalCyDex/TalCProtocol";
import TalCRegimen from "./TalCyDex/TalCRegimen";

function Home() {
  const WEIGHT = "weight";
  const HEIGHT = "height";

  const CVP_const = "CVP";
  const TALCYDEX = "TalCyDex";
  const ABVD_const = "ABVD";
  const CYBORD = "CyBorD";

  const BLACK = "black";
  const NON_BLACK = "non-black";
  const MALE = "male";
  const FEMALE = "female";

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [creat, setCreat] = useState(0);
  const [age, setAge] = useState(0);
  const [protocol, setProtocol] = useState("");
  const [race, setRace] = useState("");
  const [sex, setSex] = useState("");

  const calculateGFR = () => {
    // Levey AS, Stevens LA, Schmid CH, Zhang YL, Castro AF, 3rd, Feldman HI, et al. A new equation to estimate glomerular filtration rate. Ann Intern Med. 2009;150(9):604-12
    // GFR = 141 × min(Scr/κ, 1)α × max(Scr/κ, 1)-1.209 × 0.993Age × 1.018 [if female] × 1.159 [if African American]

    const k = sex === MALE ? 0.9 : 0.7;
    const alpha = sex === MALE ? -0.411 : -0.329;

    const min = Math.min(creat / k, 1);
    const max = Math.max(creat / k, 1);
    const isFemale = sex === FEMALE ? 1.018 : 1;
    const isBlack = race === BLACK ? 1.159 : 1;

    let gfr =
      141 * min ** alpha * max ** -1.209 * 0.993 ** age * isFemale * isBlack;
    return gfr;
  };

  const handleSex = (e) => {
    setSex(e.target.value);
  };

  const handleRace = (e) => {
    setRace(e.target.value);
  };

  return (
    <div className="home__container">
      <Tabs>
        <Tab title="Peso e Altura">
          <form className="home__basic__form">
            <div className="home__form-item">
              <label htmlFor={WEIGHT} className="home__label">
                Peso (kg):
              </label>
              <input
                type="number"
                value={weight}
                className="home__input"
                name={WEIGHT}
                id={WEIGHT}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="home__form-item">
              <label htmlFor={HEIGHT} className="home__label">
                Altura (cm):
              </label>
              <input
                value={height}
                type="number"
                className="home__input"
                name={HEIGHT}
                id={HEIGHT}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
          </form>
          <p className="home__p">
            Superfície corporal considerada:{" "}
            {calculateBSADubois(height, weight).toFixed(2)} m<sup>2</sup>
          </p>
        </Tab>
        <Tab title="Exames">
          <form className="home__basic__form">
            <div className="home__form-item">
              <label htmlFor="creat" className="home__label">
                Creatinina sérica (mg/dL):
              </label>
              <input
                value={creat}
                type="number"
                className="home__input"
                name="creat"
                id="creat"
                onChange={(e) => setCreat(e.target.value)}
              />
            </div>
            <div className="home__form-item">
              <label htmlFor="age" className="home__label">
                Idade:
              </label>
              <input
                value={age}
                type="number"
                className="home__input"
                name="age"
                id="age"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="input-row">
              <select
                onChange={handleSex}
                name="sex"
                id="sex"
                className="home__select"
              >
                <option value="" selected disabled hidden>
                  Sexo
                </option>
                <option value={MALE} className="home__option">
                  Masculino
                </option>
                <option value={FEMALE} className="home__option">
                  Feminino
                </option>
              </select>
              <select
                onChange={handleRace}
                name="race"
                id="race"
                className="home__select"
              >
                <option value="" selected disabled hidden>
                  Raça
                </option>
                <option value={BLACK} className="home__option">
                  Negro
                </option>
                <option value={NON_BLACK} className="home__option">
                  Outra
                </option>
              </select>
            </div>
          </form>
          <p>
            TFG: {calculateGFR()} {creat}
          </p>
        </Tab>
      </Tabs>

      <form className="home__basic__form">
        <select
          onChange={(e) => setProtocol(e.target.value)}
          name="bsa-options"
          id="bsa-options"
          className="home__select"
        >
          <option value="" selected disabled hidden>
            Escolha o protocolo
          </option>
          <option value={CVP_const} className="home__option">
            CVP
          </option>
          <option value={TALCYDEX} className="home__option">
            TalCyDex
          </option>
          <option value={ABVD_const} className="home__option">
            ABVD
          </option>
          <option value={CYBORD} className="home__option">
            CyBorD
          </option>
        </select>
      </form>

      {protocol === CVP_const ? (
        <Tabs>
          <Tab title="Prescrição">
            <CVPRegimen
              bsa={calculateBSADubois(height, weight)}
              gfr={calculateGFR(creat, race, sex, age)}
            />
          </Tab>
          <Tab title="Protocolo">
            <CVPProtocol />
          </Tab>
        </Tabs>
      ) : protocol === TALCYDEX ? (
        <Tabs>
          <Tab title="Prescrição">
            <TalCRegimen bsa={calculateBSADubois(height, weight)} />
          </Tab>
          <Tab title="Protocolo">
            <TalCProtocol />
          </Tab>
        </Tabs>
      ) : protocol === ABVD_const ? (
        <Tabs>
          <Tab title="Prescrição">
            <ABVDRegimen bsa={calculateBSADubois(height, weight)} />
          </Tab>
          <Tab title="Protocolo">
            <ABVDProtocol />
          </Tab>
        </Tabs>
      ) : protocol === CYBORD ? (
        <Tabs>
          <Tab title="Prescrição">
            <CyBorDRegimen bsa={calculateBSADubois(height, weight)} />
          </Tab>
          <Tab title="Protocolo">
            <CyBorDProtocol />
          </Tab>
        </Tabs>
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;

// TODO: colocar as referências dos cálculos de BSA
