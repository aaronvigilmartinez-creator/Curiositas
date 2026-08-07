import NebulaLayer from "./NebulaLayer";
import WitnessStars from "./WitnessStars";
import StellarHalo from "./StellarHalo";
import PresenceEngine from "./PresenceEngine";

export default function FirstLight() {

    return (

        <>

            <style>

                {`

                    @keyframes breathe {

                        0% {
                            transform: translate(-50%, -50%) scale(1);
                        }

                        50% {
                            transform: translate(-50%, -50%) scale(1.18);
                        }

                        100% {
                            transform: translate(-50%, -50%) scale(1);
                        }

                    }

                `}

            </style>

            <PresenceEngine>

                {(presence) => (

                    <div
                        style={{
                            position: "fixed",
                            inset: 0,

                            background:
                                "radial-gradient(circle at center, #07152b 0%, #030712 45%, #000000 100%)",

                            overflow: "hidden",
                        }}
                    >

                        {/* Nebula */}

                        <NebulaLayer />

                        {/* Witness Stars */}

                        <WitnessStars />

                        {/* Stellar Halo */}

                        <StellarHalo />

                        {/* Protostar */}

                        <div
                            style={{
                                position: "absolute",

                                left: "50%",
                                top: "50%",

                                width: "12px",
                                height: "12px",

                                transform: "translate(-50%, -50%)",

                                borderRadius: "50%",

                                background: "#fff9d6",

                                boxShadow: `
                                    0 0 12px #fff8cc,
                                    0 0 32px rgba(255,236,170,.70),
                                    0 0 80px rgba(255,225,120,.25),
                                    0 0 180px rgba(120,170,255,.10)
                                `,

                                animation: "breathe 8s ease-in-out infinite",

                            }}
                        />

                    </div>

                )}

            </PresenceEngine>

        </>

    );

}