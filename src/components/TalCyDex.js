import React from "react";

function TalCyDex({ bsa }) {
  const calculateCiclofosfamideDose = () => {
    return `${(300 * bsa).toFixed(0)}`;
  };

  return (
    <div className="talc__container">
      <h1 className="talc__h1">TalCyDex</h1>
      <ol>
        <li>
          <strong>Nome:</strong> Talcydex (Talidomida, Ciclofosfamida,
          Dexametasona)
        </li>
        <li>
          <strong>Indicações:</strong> Mieloma múltiplo
        </li>
        <li>
          <strong>Regime:</strong>
          <table className="talc__table">
            <thead className="talc__thead">
              <tr className="talc__tr">
                <th className="talc__th">Ordem</th>
                <th className="talc__th">Medicamento</th>
                <th className="talc__th">D1</th>
                <th className="talc__th">D8</th>
                <th className="talc__th">D15</th>
                <th className="talc__th">D22</th>
              </tr>
            </thead>
            <tbody className="talc__tbody">
              <tr className="talc__tr">
                <td className="talc__td">1</td>
                <td className="talc__td">
                  Dexametasona 40 mg/dia VO pela manhã
                </td>
                <td className="talc__td">X</td>
                <td className="talc__td">X</td>
                <td className="talc__td">X</td>
                <td className="talc__td">X</td>
              </tr>
              <tr className="talc__tr">
                <td className="talc__td">2</td>
                <td className="talc__td">
                  Ciclofosfamida {calculateCiclofosfamideDose()} mg/dia VO
                  durante ou após as refeições
                </td>
                <td className="talc__td">X</td>
                <td className="talc__td">X</td>
                <td className="talc__td">X</td>
                <td className="talc__td">X</td>
              </tr>
              <tr className="talc__tr">
                <td className="talc__td">3</td>
                <td className="talc__td">
                  Talidomida 100 - 200 mg/dia VO à noite
                </td>
                <td colSpan="4" className="talc__td">
                  D1 a D28
                </td>
              </tr>
            </tbody>
          </table>
        </li>
        <li>
          <strong>Freqüência:</strong> a cada 28 dias, 9 ciclos
        </li>
        <li>
          <strong>Pré-medicação:</strong> não é necessário
        </li>
        <li>
          <strong>Potencial emetogêncio:</strong> BAIXO a MODERADO
        </li>
        <li>
          <strong>Medicamentos de suporte:</strong>
          <ul>
            <li>aciclovir 200 mg 8/8 h, profilático</li>
            <li>
              sulfametoxazol 800 mg - Trimetoprim 160 mg, 1 x/dia, profilático
            </li>
            <li>AAS 100 mg, 1 x/dia</li>
          </ul>
        </li>
        {/* <li>
            TODO: fazer o ajuste de dose
          <strong>Ajuste de dose:</strong>
        </li> */}
      </ol>
    </div>
  );
}

export default TalCyDex;
