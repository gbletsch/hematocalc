import React from "react";

function CVP({ bsa }) {
  return (
    <div className="cvp__container">
      <table className="cvp__table">
        <thead className="cvp__thead">
          <tr className="cvp__tr">
            <th className="cvp__th">Ordem infusão</th>
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
            <td className="cvp__td">Vincristina</td>
            <td className="cvp__td">X</td>
            <td className="cvp__td"></td>
            <td className="cvp__td"></td>
            <td className="cvp__td"></td>
            <td className="cvp__td"></td>
          </tr>
          <tr className="cvp__tr">
            <td className="cvp__td">2</td>
            <td className="cvp__td">Ciclofosfamida</td>
            <td className="cvp__td">X</td>
            <td className="cvp__td"></td>
            <td className="cvp__td"></td>
            <td className="cvp__td"></td>
            <td className="cvp__td"></td>
          </tr>
          <tr className="cvp__tr">
            <td className="cvp__td">3</td>
            <td className="cvp__td">Prednisona</td>
            <td className="cvp__td">X</td>
            <td className="cvp__td"></td>
            <td className="cvp__td"></td>
            <td className="cvp__td"></td>
            <td className="cvp__td"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CVP;
