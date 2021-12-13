import React, { useEffect, useState, useRef } from "react";
import TRUNK from "vanta/dist/vanta.trunk.min.js";
import { v4 } from "uuid";
import p5 from "p5";
import urlBlackMirrorBaner from "../zdjecia/black-mirror-baner.jpg";
import urlFrankiAmy from "../zdjecia/frank-i-amy.png";
import urlCoach from "../zdjecia/coach.jpg";
import urlAplikacja from "../zdjecia/blackmirror-aplikacja.png";
export default function BlackMirror() {
    const [efektVanta, ustawEfektVanta] = useState(false);
    const vantaRef = useRef(null);
    useEffect(() => {
        if (!efektVanta) {
            ustawEfektVanta(
                TRUNK({
                    el: vantaRef.current,
                    color: "#14FFEC",
                    backgroundColor: "#212121",
                    scaleMobile: 0.1,
                    spacing: 1.0,
                    chaos: 3.0,
                    p5: p5,
                })
            );
        }
        return () => {
            if (efektVanta) efektVanta.destroy();
        };
    }, [efektVanta]);

    return (
        <div className="BlackMirror">
            <Helmet>
                <title>Black Mirror: Hang The DJ</title>
            </Helmet>
            <div className="tytul" ref={vantaRef}>
                <h1>Black Mirror</h1>
                <p>Hang The DJ</p>
                <a href="#opis">
                    <ion-icon
                        size="large"
                        name="chevron-down-outline"
                    ></ion-icon>
                </a>
            </div>
            <section className="opis" id="opis">
                <p className="text-center">
                    Black Mirror to brytyjski serial fantastycznonaukowy. W
                    mroczny i satyryczny sposób skupia się na tematach, które
                    dotyczą współczesnego społeczeństwa, szczególnie na
                    negatywnych konsekwencjach rozwoju nowych technologii. Każdy
                    odcinek to osobna historia
                </p>
                <img src={urlBlackMirrorBaner} alt="Baner Black Mirror" />
                <h1>Hang The DJ</h1>
                <p>
                    W odcinku "Hang the DJ" pojawia się system dobierający
                    użytkowników w pary. Dobrani użytkownicy muszą spędzić ze
                    sobą dokładnie tyle czasu, ile każe im system. Ma to na celu
                    zebranie informacji umożliwiających znalezienia idealnej
                    drugiej połówki. Głównymi bohaterami są Frank i Amy. Po
                    dobraniu przez system zakochują się w sobie, jednak gdy ich
                    czas się kończy są zmuszeni zakończyć relację. Para buntuje
                    się i ucieka poza mur otaczający miejsce w którym toczy się
                    akcja. Okazuje się, że są tylko jedną z tysiąca symulacji
                    wystawionych na test przez aplikację randkową, która
                    pokazuje poziom zgodności między użytkownikami na podstawie
                    procentu symulacji zakończonych buntem.
                </p>
                <img src={urlFrankiAmy} alt="Frank i Amy" />
            </section>
            <section className="technologie">
                <h1>Technologie</h1>
                <h5>pojawiające się w odcniku</h5>
                {technologie.map((technologia) => {
                    return (
                        <div key={v4()} className="technologia">
                            <div className="tresc">
                                <div>
                                    <h2 className="text-center">
                                        {technologia.tytul}
                                    </h2>
                                    <p>{technologia.opis}</p>
                                </div>
                                <img
                                    src={technologia.zdjecie}
                                    alt={technologia.tytul}
                                />
                            </div>
                        </div>
                    );
                })}
            </section>
        </div>
    );
}

const technologie = [
    {
        tytul: "Coach",
        opis: 'System "Coach" (po polsku trener) dobiera ludzi w pary. Użytkownicy już na samym początku relacji wiedzą ile będzie ona trwać. Związki mogą trwać godziny, dni, miesiące lub nawet lata. W ten sposób system zbiera informacje o kompatybilności użytkowników w celu znalezienia idealnego, permanentnego partnera.',
        zdjecie: urlCoach,
    },
    {
        tytul: "Aplikacja Randkowa",
        opis: "Aplikacja randkowa pokazuje w procentach kompatybilność zainteresowanych sobą osób. Informacje te pozyskuje przeprowadzając 1000 symulacji.",
        zdjecie: urlAplikacja,
    },
];
