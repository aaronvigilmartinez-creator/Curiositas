import { useState } from "react";
import ObservationEncounter from "./ObservationEncounter";

export default function ObservationExperience() {

    const [encounter] = useState(() =>
        ObservationEncounter()
    );

    if (!encounter || !encounter.observation) {
        return null;
    }

    const observation = encounter.observation;

    return (
        <div
            style={{
                position: "absolute",
                inset: 0,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                background: "#000000",

                overflow: "hidden",

                zIndex: 20,
            }}
        >

            <img
                src={observation.image}
                alt={observation.title}

                style={{
                    width: "100%",
                    height: "100%",

                    objectFit: "cover",

                    display: "block",
                }}
            />

        </div>
    );
}