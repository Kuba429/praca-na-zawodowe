import React from "react";
import Wave from "react-wavify";

export default function Fale() {
    return (
        <>
            <Wave
                className="fala fala1"
                fill="#212121"
                paused={false}
                options={{
                    height: 50,
                    amplitude: 30,
                    speed: 0.1,
                    points: 3,
                }}
            />

            <Wave
                className="fala fala2"
                fill="#14FFEC"
                paused={false}
                options={{
                    height: 35,
                    amplitude: 40,
                    speed: 0.2,
                    points: 4,
                }}
            />
            <Wave
                className="fala fala3"
                fill="#0D7377"
                paused={false}
                options={{
                    height: 35,
                    amplitude: 50,
                    speed: 0.3,
                    points: 3,
                }}
            />
        </>
    );
}
