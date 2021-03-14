import React from "react";

function ABVDProtocol() {
  return (
    <div className="protocol__container">
      <h1>Protocolo</h1>
      <ol>
        <li>
          <strong>Nome:</strong> ABVD (Adriamicina (doxorrubicina), Bleomicina,
          Vimblastina, Dacarbazina)
        </li>
        <li>
          <strong>Indicações:</strong> Primeira linha de tratamento para Linfoma
          de Hodgkin
        </li>
        <li>
          <strong>Regime:</strong>
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
                  Doxorrubicina 25 mg/m2 (reconstituir em 25 ml AD ou SF) EV
                  lento em bolus
                </td>
                <td>X</td>
                <td>X</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  Bleomicina* 10 u/m2 (reconstituir 5 ml SF) EV lento em bolus
                  (mínimo 10 min)
                </td>
                <td>X</td>
                <td>X</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Vimblastina 6 mg/m2 EV lento em bolus (5 a 15 min)</td>
                <td>X</td>
                <td>X</td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  Dacarbazina 375 mg/m2 (reconstituir em 20 ml SF e diluir em
                  500 ml SF) EV infusão em 3h
                </td>
                <td>X</td>
                <td>X</td>
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

export default ABVDProtocol;
