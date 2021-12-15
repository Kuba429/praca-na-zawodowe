import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./komponenty/Navbar";
import StronaGlowna from "./komponenty/StronaGlowna";
import Aplikacje from "./komponenty/Aplikacje";
import OStronie from "./komponenty/OStronie";
import BlackMirror from "./komponenty/BlackMirror";
import Footer from "./komponenty/Footer";
function App() {
    const lokalizacja = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [lokalizacja.pathname]);

    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<StronaGlowna />} />
                <Route path="/black-mirror" element={<BlackMirror />} />
                <Route path="/aplikacje" element={<Aplikacje />} />
                <Route path="/o-stronie" element={<OStronie />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
