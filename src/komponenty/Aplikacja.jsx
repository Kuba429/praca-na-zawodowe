import React from "react";

export default function Aplikacja({ dane }) {
    return (
        <div className="aplikacja">
            <div className="info">
                <h2>{dane.tytul}</h2>
                <p>{dane.opis}</p>
                <div className="linki">
                    <button className="google-play">
                        <a href={dane.googlePlay} target="_blank">
                            Google Play
                            <ion-icon name="logo-google-playstore"></ion-icon>
                        </a>
                    </button>
                    <button className="app-store">
                        <a href={dane.appStore} target="_blank">
                            App Store
                            <ion-icon name="logo-apple-appstore"></ion-icon>
                        </a>
                    </button>
                </div>
            </div>
            <img className="logo" src={dane.urlZdjecia} alt={dane.tytul} />
        </div>
    );
}
