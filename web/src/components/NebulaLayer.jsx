export default function NebulaLayer() {

    return (

        <>

            <style>

                {`

                    @keyframes nebulaDrift {

                        0% {

                            transform: translate(0px, 0px) rotate(0deg);

                        }

                        50% {

                            transform: translate(-18px, 10px) rotate(.35deg);

                        }

                        100% {

                            transform: translate(0px, 0px) rotate(0deg);

                        }

                    }

                `}

            </style>

            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    overflow: "hidden",

                    animation: "nebulaDrift 240s ease-in-out infinite",
                }}
            >

                {/* Northern Hydrogen Cloud */}

                <div
                    style={{
                        position: "absolute",

                        width: "1800px",
                        height: "1800px",

                        left: "-600px",
                        top: "-700px",

                        borderRadius: "50%",

                        background:
                            "radial-gradient(circle, rgba(85,130,255,.10) 0%, rgba(45,80,180,.06) 25%, rgba(20,40,100,.03) 55%, transparent 82%)",

                        filter: "blur(260px)",

                        transform: "rotate(-18deg)",
                    }}
                />

                {/* Southern Molecular Cloud */}

                <div
                    style={{
                        position: "absolute",

                        width: "2000px",
                        height: "1600px",

                        right: "-700px",
                        bottom: "-650px",

                        borderRadius: "50%",

                        background:
                            "radial-gradient(circle, rgba(120,90,255,.08) 0%, rgba(60,40,150,.05) 35%, rgba(30,20,70,.02) 60%, transparent 82%)",

                        filter: "blur(300px)",

                        transform: "rotate(20deg)",
                    }}
                />

                {/* Ancient Light */}

                <div
                    style={{
                        position: "absolute",

                        width: "2200px",
                        height: "1000px",

                        left: "50%",
                        top: "52%",

                        transform: "translate(-50%, -50%)",

                        borderRadius: "50%",

                        background:
                            "radial-gradient(circle, rgba(130,170,255,.035) 0%, rgba(70,120,220,.02) 50%, transparent 85%)",

                        filter: "blur(280px)",
                    }}
                />

            </div>

        </>

    );

}