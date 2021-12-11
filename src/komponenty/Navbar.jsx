import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
                <Linki zmienStanNawigacji={zmienStanNawigacji} />
            </nav>

            <nav className="navbar glowny">
                <ion-icon
                    onClick={zmienStanNawigacji}
                    size="large"
                    name="menu"
                ></ion-icon>
                <Linki zmienStanNawigacji={zmienStanNawigacji} />
            </nav>
        </>
    );
}

const Linki = ({ zmienStanNawigacji }) => {
    return (
        <div className="linki">
            <NavLink to="/">Strona Główna</NavLink>
            <NavLink to="/">Aplikacje</NavLink>
            <NavLink to="/">Black Mirror</NavLink>
            <NavLink to="/">O stronie</NavLink>
        </div>
    );
};
