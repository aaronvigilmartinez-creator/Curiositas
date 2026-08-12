import { useState } from "react";
import ObservationEncounter from "./ObservationEncounter";
import PresenceEngine from "./PresenceEngine";

export default function ObservationExperience() {

    const [encounter] = useState(() =>
        ObservationEncounter()
    );

    if (!encounter || !encounter.observation) {
        return null;
    }

    const observation = encounter.observation;

    return (
        <PresenceEngine>

            {(presence) => {

                const depth =
                    1 +
                    (
                        Math.abs(presence.x) +
                        Math.abs(presence.y)
                    ) * 0.012;

                const perspectiveX =
                    presence.x * 0.35;

                const perspectiveY =
                    presence.y * -0.35;

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

                                filter:
                                    "brightness(0.88) contrast(1.14) saturate(1.08)",

                                transform:
                                    `perspective(1800px) rotateX(${perspectiveY}deg) rotateY(${perspectiveX}deg) translate(${presence.x * -8}px, ${presence.y * -8}px) scale(${depth})`,

                                transition:
                                    "transform 120ms ease-out",
                            }}
                        />

                        <div
                            style={{
                                position: "absolute",
                                inset: 0,

                                pointerEvents: "none",

                                background:
                                    "radial-gradient(circle at center, transparent 45%, rgba(0, 8, 24, 0.18) 72%, rgba(0, 0, 0, 0.42) 100%)",
                            }}
                        />

                    </div>
                );
            }}

        </PresenceEngine>
    );
}