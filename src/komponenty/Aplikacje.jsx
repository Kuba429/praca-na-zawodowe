import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";

import Aplikacja from "./Aplikacja";
import Bloby from "./Bloby";
import { v4 } from "uuid";

// zdjecia
import urlToDo from "../zdjecia/todo-logo.png";
import urlAnydesk from "../zdjecia/anydesk-logo.png";
import urlMcdonalds from "../zdjecia/mcdonalds-logo.png";
import urlTvtime from "../zdjecia/tvtime-logo.png";

export default function Aplikacje() {
    const blobRef = useRef(null);

    return (
        <div className="Aplikacje">
            <Helmet>
                <title>Aplikacje mobilne</title>
            </Helmet>
            <div className="tytul">
                <Bloby />
                <h1>Aplikacje</h1>
            </div>

            <section>
                {aplikacjeDane.map((aplikacja) => {
                    return <Aplikacja key={v4()} dane={aplikacja} />;
                })}
            </section>
        </div>
    );
}

const aplikacjeDane = [
    {
        tytul: "TV Time",
        opis: "TV Time to aplikacja ułatwiająca śledzenie postępu w oglądaniu seriali i filmów. Pozwala również na czytanie i zostawianie recenzji i więcej.",
        urlZdjecia: urlTvtime,
        appStore:
            "https://apps.apple.com/us/app/tv-time-track-shows-movies/id431065232",
        googlePlay:
            "https://play.google.com/store/apps/details?id=com.tozelabs.tvshowtime&hl=en&gl=US",
    },
    {
        tytul: "Microsoft To Do",
        opis: 'Prosta aplikacja typu "to do list" stworzona przez Microsoft. Pozwala na organizację zadań i bardzo dobrą synchronizację z innymi ekosystemami (np. apple)',
        urlZdjecia: urlToDo,
        appStore:
            "https://apps.apple.com/pl/app/microsoft-to-do/id1212616790?l=pl",
        googlePlay:
            "https://play.google.com/store/apps/details?id=com.microsoft.todos&hl=en&gl=US",
    },
    {
        tytul: "Anydesk",
        opis: "Program umożliwiający sterowanie systemem operacyjnym zdalnie, przez internet. Program umożliwia sterowanie pulpitem, przeglądanie plików i przesyłanie danych między urządzeniami.",
        urlZdjecia: urlAnydesk,
        appStore:
            "https://apps.apple.com/us/app/anydesk-remote-desktop/id1176131273",
        googlePlay:
            "https://play.google.com/store/apps/details?id=com.anydesk.anydeskandroid&hl=en&gl=US",
    },
    {
        tytul: "McDonald's",
        opis: 'Aplikacja zawiera menu i nowości w restauracji McDonald\'s. Dostępne są również "okazje" dzięki którym można kupić elementy oferty w obniżonych cenach.',
        urlZdjecia: urlMcdonalds,
        appStore: "https://apps.apple.com/pl/app/mcdonalds/id1217507712?l=pl",
        googlePlay:
            "https://play.google.com/store/apps/details?id=com.mcdonalds.mobileapp&hl=en&gl=US",
    },
];
