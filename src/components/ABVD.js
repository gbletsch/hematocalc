import React from "react";

function ABVD({ bsa }) {
  //   const calculateCiclofosfamideDose = () => {
  //     return `${(300 * bsa).toFixed(0)}`;
  //   };

  return (
    <div className="talc__container">
      <h1 className="talc__h1">ABVD</h1>
      <table className="talc__table">
        <thead className="talc__thead">
          <tr className="talc__tr">
            <th className="talc__th">Ordem</th>
            <th className="talc__th">Medicamento</th>
            <th className="talc__th">D1</th>
            <th className="talc__th">D15</th>
          </tr>
        </thead>
        <tbody className="talc__tbody">
          <tr className="talc__tr">
            <td className="talc__td">1</td>
            <td className="talc__td">
              Doxorrubicina 25 mg/m2 (reconstituir em 25 ml AD ou SF) EV lento
              em bolus
            </td>
            <td className="talc__td">X</td>
            <td className="talc__td">X</td>
          </tr>
          <tr className="talc__tr">
            <td className="talc__td">2</td>
            <td className="talc__td">
              Bleomicina* 10 u/m2 (reconstituir 5 ml SF) EV lento em bolus
              (mínimo 10 min){" "}
            </td>
            <td className="talc__td">X</td>
            <td className="talc__td">X</td>
          </tr>
          <tr className="talc__tr">
            <td className="talc__td">3</td>
            <td className="talc__td">
              Vimblastina 6 mg/m2 EV lento em bolus (5 a 15 min)
            </td>
            <td className="talc__td">X</td>
            <td className="talc__td">X</td>
          </tr>
          <tr className="talc__tr">
            <td className="talc__td">4</td>
            <td className="talc__td">
              Dacarbazina 375 mg/m2 (reconstituir em 20 ml SF e diluir em 500 ml
              SF) EV infusão em 3h
            </td>
            <td className="talc__td">X</td>
            <td className="talc__td">X</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ABVD;
