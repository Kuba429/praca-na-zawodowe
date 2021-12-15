import React from "react";

export default function Footer() {
    return (
        <footer>
            <div>
                <p>Autor: Jakub Zawadzki</p>
                <span>Mój adres e-mail: </span>
                <a href="mailto:jakubzawadzki429@gmail.com">
                    jakubzawadzki429@gmail.com
                </a>
            </div>
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
        </footer>
    );
}
