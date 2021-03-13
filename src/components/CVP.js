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

      <ol>
        <li>
          <strong>Nome:</strong> CVP (Ciclofosfamida, Vincristina, Prednisona)
        </li>
        <li>
          <strong>Indicações:</strong> Linfoma não Hodgkin baixo grau
        </li>
        <li>
          <strong>Regime:</strong>
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
        </li>
        <li>
          <strong>Freqüência:</strong> a cada 21 dias, 6 ou 8 ciclos
        </li>
        <li>
          <strong>Pré-medicação:</strong> ondansetrona 8mg 1amp pré-QT
        </li>
        <li>
          <strong>Potencial emetogêncio:</strong> MODERADO (30 - 90%)
        </li>
        <li>
          <strong>Medicamentos de suporte:</strong>
          <ul>
            <li>
              alopurinol 300mg/dia para prevenção de síndrome da lise tumoral
            </li>
            <li>omeprazol 20mg/dia</li>
          </ul>
        </li>
        <li>
          <strong>Ajuste de dose:</strong>
          <ol>
            <li>
              <em>Função renal:</em>
            </li>
            <table>
              <thead>
                <tr>
                  <th>Clearance creatinina</th>
                  <th>Vincristina</th>
                  <th>Ciclofosfamida</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>30 -50</td>
                  <td>Não requer ajuste de dose</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>10 - 30</td>
                  <td>Não requer ajuste de dose</td>
                  <td>50 - 75%</td>
                </tr>
                <tr>
                  <td>{"<"} 10%</td>
                  <td>Não requer ajuste de dose</td>
                  <td>50% ou omissão</td>
                </tr>
              </tbody>
            </table>
            <li>
              <em>Função hepática:</em>
            </li>
            <table>
              <thead>
                <tr>
                  <th>Bilirrubinas</th>
                  <th>Vincristina</th>
                  <th>Ciclofosfamida</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Aumento de 1-2 vezes limite superior</td>
                  <td>50%</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>Aumento de 2-4 vezes limite superior</td>
                  <td>25%</td>
                  <td>Atenção</td>
                </tr>
                <tr>
                  <td>Aumento maior de 4 vezes limite superior</td>
                  <td>Omitir</td>
                  <td>Atenção</td>
                </tr>
              </tbody>
            </table>
            <li>
              <em>Toxicidade hematológica e não-hematológica:</em>
            </li>
            <table>
              <thead>
                <tr>
                  <th>Toxicidade</th>
                  <th>Vincristina</th>
                  <th>Ciclofosfamida</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Toxicidade hematológica grau 4 &gt;= 7 dias, neutropenia
                    febril, sangramento
                  </td>
                  <td>100%</td>
                  <td>75% ou filgrastima (em neutropenia)</td>
                </tr>
                <tr>
                  <td>Toxicidade não hematológica grau 3</td>
                  <td>100%</td>
                  <td>75%</td>
                </tr>
                <tr>
                  <td>Toxicidade orgânica grau 4</td>
                  <td>descontinuar</td>
                  <td>descontinuar</td>
                </tr>
                <tr>
                  <td>Neurotoxicidade</td>
                  <td>
                    <p>
                      <strong>Leve:</strong> 67%
                    </p>
                    <p>
                      <strong>Moderada:</strong> Aguardar recuperação, reiniciar
                      100%
                    </p>{" "}
                  </td>
                  <td>100%</td>
                </tr>
              </tbody>
            </table>
          </ol>
        </li>
      </ol>
    </div>
  );
}

export default CVP;
