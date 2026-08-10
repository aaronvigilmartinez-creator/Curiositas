export default function StellarHalo() {

    return (

        <div
            style={{

                position: "absolute",

                left: "50%",
                top: "50%",

                transform: "translate(-50%, -50%)",

                width: "1800px",
                height: "1800px",

                borderRadius: "50%",

                background:
                    "radial-gradient(circle, rgba(255,245,210,.055) 0%, rgba(180,200,255,.030) 18%, rgba(110,150,255,.018) 34%, rgba(60,90,180,.010) 55%, transparent 82%)",

                filter: "blur(140px)",

                pointerEvents: "none",

            }}
        />

    );

}