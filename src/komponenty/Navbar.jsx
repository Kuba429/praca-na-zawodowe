import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";
import { tematy } from "./SpisTresci";
export default function Navbar() {
    const [bocznaNawigacja, ustawBocznaNawigacje] = useState(false);
    const zmienStanNawigacji = () => {
        ustawBocznaNawigacje(!bocznaNawigacja);
    };

    return (
        <>
            <nav className={`navbar boczny ${bocznaNawigacja && "aktywny"}`}>
                <ion-icon
                    onClick={zmienStanNawigacji}
                    size="large"
                    name="menu"
                ></ion-icon>
                <Linki ustawBocznaNawigacje={ustawBocznaNawigacje} />
            </nav>

            <nav className="navbar glowny">
                <ion-icon
                    onClick={zmienStanNawigacji}
                    size="large"
                    name="menu"
                ></ion-icon>
                <Linki ustawBocznaNawigacje={ustawBocznaNawigacje} />
            </nav>
        </>
    );
}

const Linki = ({ ustawBocznaNawigacje }) => {
    return (
        <div className="linki">
            <NavLink
                onClick={() => {
                    ustawBocznaNawigacje(false);
                }}
                to="/"
            >
                Strona Główna
            </NavLink>
            {tematy.map((temat) => {
                return (
                    <NavLink
                        onClick={() => {
                            ustawBocznaNawigacje(false);
                        }}
                        key={v4()}
                        to={temat.link}
                    >
                        {temat.tytul}
                    </NavLink>
                );
            })}
        </div>
    );
};
