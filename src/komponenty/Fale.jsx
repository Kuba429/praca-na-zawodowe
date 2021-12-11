import React from 'react'
import Wave from "react-wavify";

export default function Fale() {
    return (
        <>
         <Wave
                className="fala"
                fill="#e16428"
                paused={false}
                options={{
                    height: 100,
                    amplitude: 30,
                    speed: 0.1,
                    points: 3,
                }}
            />
            <Wave
                className="fala"
                fill="rgba(225, 100, 40, 0.5)"
                paused={false}
                options={{
                    height: 60,
                    amplitude: 30,
                    speed: 0.15,
                    points: 4,
                }}
            />
            <Wave
                className="fala"
                fill="rgba(225, 100, 40, 0.3)"
                paused={false}
                options={{
                    height: 40,
                    amplitude: 50,
                    speed: 0.2,
                    points: 3,
                }}
            />   
        </>
    )
}
