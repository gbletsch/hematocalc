import React from "react";

function CVP({ bsa }) {
  const calculateVincristinaDose = () => {
    let min = 1.2 * Number(bsa);
    let max = 1.4 * Number(bsa);

    if (min > 2) {
      return "2";
    } else if (max > 2) {
      max = 2;
    }
    return `${min.toFixed(2)} - ${max.toFixed(2)}`;
  };

  const calculateCiclofosfamideDose = () => {
    return `${(750 * bsa).toFixed(0)} - ${(1000 * bsa).toFixed(0)}`;
  };

  return (
    <div className="cvp__container">
      <h1 className="cvp__h1">CVP</h1>
      <table className="cvp__table">
        <thead className="cvp__thead">
          <tr className="cvp__tr">
            <th className="cvp__th">Ordem</th>
            <th className="cvp__th">Medicamento</th>
            <th className="cvp__th">D1</th>
            <th className="cvp__th">D2</th>
            <th className="cvp__th">D3</th>
            <th className="cvp__th">D4</th>
            <th className="cvp__th">D5</th>
          </tr>
        </thead>
        <tbody className="cvp__tbody">
          <tr className="cvp__tr">
            <td className="cvp__td">1</td>
            <td className="cvp__td">
              Vincristina {calculateVincristinaDose()} mg Ev lento
            </td>
            <td className="cvp__td">X</td>
            <td className="cvp__td"></td>
            <td className="cvp__td"></td>
            <td className="cvp__td"></td>
            <td className="cvp__td"></td>
          </tr>
          <tr className="cvp__tr">
            <td className="cvp__td">2</td>
            <td className="cvp__td">
              Ciclofosfamida {calculateCiclofosfamideDose()} mg Ev 1 hora
            </td>
            <td className="cvp__td">X</td>
            <td className="cvp__td"></td>
            <td className="cvp__td"></td>
            <td className="cvp__td"></td>
            <td className="cvp__td"></td>
          </tr>
          <tr className="cvp__tr">
            <td className="cvp__td">3</td>
            <td className="cvp__td">Prednisona 100mg/dia VO</td>
            <td className="cvp__td">X</td>
            <td className="cvp__td">X</td>
            <td className="cvp__td">X</td>
            <td className="cvp__td">X</td>
            <td className="cvp__td">X</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CVP;
