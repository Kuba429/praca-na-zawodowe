import React from "react";
import urlBlackMirrorBaner from "../zdjecia/black-mirror-baner.jpg";
import urlFrankiAmy from "../zdjecia/frank-i-amy.png";
export default function BlackMirror() {
    return (
        <div className="BlackMirror">
            <div className="tytul">
                <h1>Black Mirror</h1>
                <p>Hang The DJ</p>
                <a href="#opis">a</a>
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
                <div>
                    <h3>Coach</h3>
                </div>
            </section>
        </div>
    );
}
