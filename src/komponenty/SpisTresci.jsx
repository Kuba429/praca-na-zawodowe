import React from "react";
import { v4 } from "uuid";
import { NavLink } from "react-router-dom";
import urlBlackMirror from "../zdjecia/black-mirror.svg";
import urlAplikacje from "../zdjecia/aplikacje.svg";
import urlOstronie from "../zdjecia/frameworks.svg";

export default function SpisTresci() {
    return (
        <section className="spis">
            {tematy.map((temat) => {
                return (
                    <div className="temat" key={v4()}>
                        <div>
                            <h1>{temat.tytul}</h1>
                            <p>{temat.opis}</p>
                            <NavLink to={temat.link}>Czytaj dalej</NavLink>
                        </div>
                        <img src={temat.zdjecie} alt={temat.tytul} />
                    </div>
                );
            })}
        </section>
    );
}

export const tematy = [
    {
        tytul: "Black Mirror",
        zdjecie: urlBlackMirror,
        opis: 'Dowiedz się do jakich negatywnych efektów może prowadzić rozwój technologii w opisie jednego z odcinków serialu "Black Mirror".',
        link: "/black-mirror",
    },
    {
        tytul: "Aplikacje",
        zdjecie: urlAplikacje,
        opis: "Poznaj cztery ciekawe aplikacje na smartfony z systemem Android lub iOS które na pewno Ci się przydadzą.",
        link: "/aplikacje",
    },
    {
        tytul: "O stronie",
        zdjecie: urlOstronie,
        opis: "Technologie i narzędzia użyte do stworzenia strony na której się aktualnie znajdujesz. Dowiedz się co kryje się za kulisami.",
        link: "/o-stronie",
    },
];
