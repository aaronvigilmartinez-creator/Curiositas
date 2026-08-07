export default function WitnessStars() {

    const stars = [

        {
            left: "22%",
            top: "18%",
            size: 2,
            color: "#F7F4E8",
            glow: 6,
        },

        {
            left: "73%",
            top: "24%",
            size: 2,
            color: "#DDEBFF",
            glow: 7,
        },

        {
            left: "16%",
            top: "67%",
            size: 3,
            color: "#FFF8D2",
            glow: 9,
        },

        {
            left: "81%",
            top: "61%",
            size: 2,
            color: "#E8E0FF",
            glow: 7,
        },

        {
            left: "38%",
            top: "77%",
            size: 2,
            color: "#E6F5FF",
            glow: 6,
        },

        {
            left: "59%",
            top: "16%",
            size: 1,
            color: "#EEF7F7",
            glow: 5,
        },

        {
            left: "63%",
            top: "74%",
            size: 2,
            color: "#F2EEFF",
            glow: 6,
        },

    ];

    return (

        <>

            {

                stars.map((star, index) => (

                    <div
                        key={index}

                        style={{

                            position: "absolute",

                            left: star.left,
                            top: star.top,

                            width: `${star.size}px`,
                            height: `${star.size}px`,

                            borderRadius: "50%",

                            background: star.color,

                            boxShadow: `0 0 ${star.glow}px ${star.color}`,

                            opacity: .72,

                            pointerEvents: "none",

                        }}

                    />

                ))

            }

        </>

    );

}