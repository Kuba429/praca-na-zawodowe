import React from "react";
import { Helmet } from "react-helmet";

import urlVscode from "../zdjecia/vscode.svg";
import urlGit from "../zdjecia/git.svg";
export default function OStronie() {
    return (
        <div className="oStronie">
            <Helmet>
                <title>O stronie</title>
            </Helmet>
            <h1 className="tytul">Informacje o stronie</h1>
            <section>
                <h1>Technologie i narzędzia użyte do stworzenia tej strony:</h1>

                <ul>
                    <li>
                        <ion-icon size="large" name="logo-react"></ion-icon>
                        React - Framework Javascript
                    </li>
                    <li>
                        <ion-icon size="large" name="logo-sass"></ion-icon>
                        Sass - Preprocesor CSS
                    </li>
                    <li>
                        <img src={urlGit} alt="Git logo" className="ikona" />
                        Git - system kontroli wersji
                    </li>
                    <li>
                        <ion-icon size="large" name="logo-npm"></ion-icon>
                        NPM - manager modułów javascript
                    </li>

                    <li>
                        <img
                            className="ikona"
                            src={urlVscode}
                            alt="visual studio code logo"
                        />
                        VS Code - edytor kodu
                    </li>
                </ul>

                <a
                    href="https://github.com/Kuba429/praca-na-zawodowe"
                    target="_blank"
                    className="link"
                >
                    <span>
                        Kod źródłowy strony
                        <ion-icon name="logo-github"></ion-icon>
                    </span>
                </a>
            </section>
        </div>
    );
}
