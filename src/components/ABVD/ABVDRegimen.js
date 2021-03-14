import React from "react";

function ABVDRegimen({ bsa }) {
  const calculateDoxorrubicin = () => {
    return bsa * 25;
  };

  const calculateBleomicin = () => {
    return bsa * 10;
  };

  const calculateVimblastine = () => {
    return bsa * 6;
  };

  const calculateDacarbazine = () => {
    return bsa * 375;
  };

  return (
    <div className="regimen__container">
      <h1>Prescrição</h1>
      <table>
        <thead>
          <tr>
            <th>Ordem</th>
            <th>Medicamento</th>
            <th>D1</th>
            <th>D15</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              Doxorrubicina {calculateDoxorrubicin().toFixed(2)} mg
              (reconstituir em 25 ml AD ou SF) EV lento em bolus
            </td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              Bleomicina* {calculateBleomicin().toFixed(2)} u (reconstituir 5 ml
              SF) EV lento em bolus (mínimo 10 min){" "}
            </td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              Vimblastina {calculateVimblastine().toFixed(2)} mg EV lento em
              bolus (5 a 15 min)
            </td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              Dacarbazina {calculateDacarbazine().toFixed(2)} mg (reconstituir
              em 20 ml SF e diluir em 500 ml SF) EV infusão em 3h
            </td>
            <td>X</td>
            <td>X</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ABVDRegimen;
