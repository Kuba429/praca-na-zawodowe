import { Routes, Route } from "react-router-dom";
import Navbar from "./komponenty/Navbar";
import StronaGlowna from "./komponenty/StronaGlowna";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<StronaGlowna />} />
            </Routes>
        </div>
    );
}

export default App;
