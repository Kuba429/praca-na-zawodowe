import React from "react";
import { Helmet } from "react-helmet";
import Fale from "./Fale";
import SpisTresci from "./SpisTresci";
export default function StronaGlowna() {
    return (
        <div className="strona-glowna">
            <Helmet>
                <title>Strona Główna</title>
            </Helmet>
            <div className="el1">
                <h1>Jakub Zawadzki</h1>
                <Fale />
            </div>

            <SpisTresci />
        </div>
    );
}
