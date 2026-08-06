import NebulaLayer from "./NebulaLayer";

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

            <div
                style={{
                    position: "fixed",
                    inset: 0,

                    background:
                        "radial-gradient(circle at center, #07152b 0%, #030712 45%, #000000 100%)",

                    overflow: "hidden",
                }}
            >

                {/* NebulaLayer */}

                <NebulaLayer />

                {/* Protostar */}

                <div
                    style={{
                        position: "absolute",

                        left: "50%",
                        top: "50%",

                        width: "10px",
                        height: "10px",

                        transform: "translate(-50%, -50%)",

                        borderRadius: "50%",

                        background: "#fff9d6",

                        boxShadow:
                            "0 0 12px #fff8cc, 0 0 30px #ffe88a, 0 0 60px rgba(255,230,120,.35)",

                        animation: "breathe 8s ease-in-out infinite",
                    }}
                />

            </div>

        </>

    );

}