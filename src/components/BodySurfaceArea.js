import React from "react";

const calculateBSADubois = (h, w) => {
  return (w ** 0.425 * h ** 0.725 * 71.84) / 10 ** 4;
};

const calculateBSAMosteller = (h, w) => {
  return ((h * w) / 3600) ** 0.5;
};

// TODO: colocar as referências dos cálculos de BSA

function BodySurfaceArea({ height, weight }) {
  return (
    <div className="bsa__container">
      <h2 className="bsa__h2">BSA</h2>
      <section className="bsa__response__container">
        <p className="bsa__text">
          Dubois: {calculateBSADubois(height, weight).toFixed(3)} m<sup>2</sup>
        </p>
        <p className="bsa__text">
          Mosteller: {calculateBSAMosteller(height, weight).toFixed(3)} m
          <sup>2</sup>
        </p>
      </section>
    </div>
  );
}

export default BodySurfaceArea;
