import React from "react";
import { Blob } from "react-blob";

export default function Bloby() {
    return (
        <>
            <Blob
                size="50vh"
                style={{
                    position: "absolute",
                    zIndex: 5,
                    backgroundColor: "#323232",

                    opacity: 0.5,
                }}
            />
            <Blob
                size="42vh"
                style={{
                    position: "absolute",
                    zIndex: 5,
                    backgroundColor: "#14FFEC",

                    opacity: 0.7,
                }}
            />
             <Blob
                size="32vh"
                style={{
                    position: "absolute",
                    zIndex: 5,
                    backgroundColor: "#212121",


                    opacity: 0.8,
                }}
            />
        </>
    );
}
