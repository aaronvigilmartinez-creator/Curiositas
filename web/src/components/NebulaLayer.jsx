export default function NebulaLayer() {

    return (

        <>
            {/* Deep Blue Cloud */}

            <div
                style={{
                    position: "absolute",
                    left: "-30%",
                    top: "-20%",

                    width: "1400px",
                    height: "1200px",

                    borderRadius: "50%",

                    background:
                        "radial-gradient(circle, rgba(70,120,255,.10) 0%, rgba(35,60,140,.05) 40%, transparent 80%)",

                    filter: "blur(220px)",

                    transform: "rotate(-18deg)",
                }}
            />

            {/* Violet Gas */}

            <div
                style={{
                    position: "absolute",
                    right: "-35%",
                    bottom: "-25%",

                    width: "1600px",
                    height: "1400px",

                    borderRadius: "50%",

                    background:
                        "radial-gradient(circle, rgba(120,90,255,.08) 0%, rgba(50,35,110,.04) 45%, transparent 82%)",

                    filter: "blur(260px)",

                    transform: "rotate(22deg)",
                }}
            />

            {/* Central Interstellar Mist */}

            <div
                style={{
                    position: "absolute",

                    left: "50%",
                    top: "48%",

                    transform: "translate(-50%, -50%)",

                    width: "1800px",
                    height: "900px",

                    borderRadius: "50%",

                    background:
                        "radial-gradient(circle, rgba(120,170,255,.035) 0%, rgba(60,90,180,.02) 50%, transparent 85%)",

                    filter: "blur(260px)",
                }}
            />

            {/* Faint Cyan Glow */}

            <div
                style={{
                    position: "absolute",

                    left: "25%",
                    top: "70%",

                    width: "900px",
                    height: "700px",

                    borderRadius: "50%",

                    background:
                        "radial-gradient(circle, rgba(90,180,255,.03) 0%, transparent 85%)",

                    filter: "blur(180px)",
                }}
            />
        </>

    );

}