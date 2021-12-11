import React from "react";
import Fale from "./Fale";
// import urlBlackMirror from "../zdjecia/black-mirror.jpg";
import urlBlackMirror from "../zdjecia/black-mirror.svg";
import urlAplikacje from '../zdjecia/aplikacje.svg'
import urlOstronie from'../zdjecia/frameworks.svg'
export default function StronaGlowna() {
    return (
        <div className="strona-glowna">
            <div className="el1">
                <h1>Jakub Zawadzki</h1>
                <Fale />
            </div>

            <section className="spis">
                <div className="temat">
                    <div>
                        <h1>Black mirror</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsa mollitia omnis tempora repellendus
                            voluptatem, accusamus voluptate obcaecati placeat
                            beatae illo.
                        </p>
                    </div>
                    <img src={urlBlackMirror} alt="" />
                </div>

                <div className="temat">
                    <div>
                        <h1>Aplikacje</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsa mollitia omnis tempora repellendus
                            voluptatem, accusamus voluptate obcaecati placeat
                            beatae illo.
                        </p>
                    </div>
                    <img src={urlAplikacje} alt="" />
                </div>

                <div className="temat">
                    <div>
                        <h1>O stronie</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsa mollitia omnis tempora repellendus
                            voluptatem, accusamus voluptate obcaecati placeat
                            beatae illo.
                        </p>
                    </div>
                    <img src={urlOstronie} alt="" />
                </div>
            </section>
        </div>
    );
}
