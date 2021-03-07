import React from "react";
import {
  calculateBSADubois,
  calculateBSAMosteller,
} from "../utils/bsa-formulae";

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
