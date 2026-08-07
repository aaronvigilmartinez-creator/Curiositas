export default function FirstWitness() {

    return (

        <div
            style={{
                position: "absolute",

                left: "18%",
                top: "24%",

                width: "2px",
                height: "2px",

                borderRadius: "50%",

                background: "#eef5ff",

                opacity: .45,

                boxShadow:
                    "0 0 6px rgba(255,255,255,.45)",

                animation: "firstWitness 9s ease-in-out infinite alternate",

                pointerEvents: "none",
            }}
        />

    );

}