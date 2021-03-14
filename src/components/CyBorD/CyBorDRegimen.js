import React from "react";

function CyBorDRegimen({ bsa }) {
  const calculateBortezomib = () => {
    return 1.3 * bsa;
  };

  const calculateCiclofosfamide = () => {
    return 300 * bsa;
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
            <th>D8</th>
            <th>D15</th>
            <th>D22</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              Bortezomib {calculateBortezomib().toFixed(2)} mg SC (diluir cada
              3,5 mg em 3,5 ml SF)
            </td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              Ciclofosfamida {calculateCiclofosfamide().toFixed(2)} mg/dia VO
            </td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Dexametasona 40 mg/dia VO</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CyBorDRegimen;
