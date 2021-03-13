import React from "react";

function CyBorD({ bsa }) {
  const calculateBortezomib = () => {
    return `${(1.3 * bsa).toFixed(2)}`;
  };

  const calculateCiclofosfamide = () => {
    return `${300 * bsa}`;
  };

  return (
    <div className="cybord__container">
      <h1>CyBorD</h1>

      <ol>
        <li>
          <strong>Nome:</strong> CyBorD (Ciclofosfamida, Bortezomib,
          Dexametasona)
        </li>
        <li>
          <strong>Indicações:</strong> Mieloma múltiplo e amiloidose
        </li>
        <li>
          <strong>Regime:</strong>
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
                  Bortezomib {calculateBortezomib()} mg SC (diluir cada 3,5 mg
                  em 3,5 ml SF)
                </td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ciclofosfamida {calculateCiclofosfamide()} mg/dia VO</td>
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
        </li>
        <li>
          <strong>Freqüência:</strong> a cada 28 dias
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

export default CyBorD;
