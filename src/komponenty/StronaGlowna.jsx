import React from "react";
import Fale from "./Fale";
import SpisTresci from "./SpisTresci";
export default function StronaGlowna() {
    return (
        <div className="strona-glowna">
            <div className="el1">
                <h1>Jakub Zawadzki</h1>
                <Fale />
            </div>

            <SpisTresci/>
        </div>
    );
}
