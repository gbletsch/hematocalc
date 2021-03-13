import React from "react";

function TalCRegimen({ bsa }) {
  const calculateCiclofosfamideDose = () => {
    return `${(300 * bsa).toFixed(0)}`;
  };

  return (
    <div className="regimen__container">
      <h1>Prescrição</h1>
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
            <td className="talc__td">Dexametasona 40 mg/dia VO pela manhã</td>
            <td className="talc__td">X</td>
            <td className="talc__td">X</td>
            <td className="talc__td">X</td>
            <td className="talc__td">X</td>
          </tr>
          <tr className="talc__tr">
            <td className="talc__td">2</td>
            <td className="talc__td">
              Ciclofosfamida {calculateCiclofosfamideDose()} mg/dia VO durante
              ou após as refeições
            </td>
            <td className="talc__td">X</td>
            <td className="talc__td">X</td>
            <td className="talc__td">X</td>
            <td className="talc__td">X</td>
          </tr>
          <tr className="talc__tr">
            <td className="talc__td">3</td>
            <td className="talc__td">Talidomida 100 - 200 mg/dia VO à noite</td>
            <td colSpan="4" className="talc__td">
              D1 a D28
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TalCRegimen;
