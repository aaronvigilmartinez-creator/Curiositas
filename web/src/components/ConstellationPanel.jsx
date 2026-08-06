export default function ConstellationPanel({

    title,

    artifacts = []

}) {

    return (

        <div
            style={{
                background: "#111827",
                border: "1px solid #374151",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,.25)"
            }}
        >

            <h3
                style={{
                    color: "#6fc7ff",
                    marginTop: 0,
                    marginBottom: "15px"
                }}
            >
                {title}
            </h3>

            <hr
                style={{
                    borderColor: "#374151",
                    marginBottom: "18px"
                }}
            />

            {

                artifacts.length === 0 ? (

                    <p
                        style={{
                            color: "#9ca3af",
                            fontStyle: "italic"
                        }}
                    >

                        No relationships discovered yet.

                    </p>

                ) : (

                    artifacts.map((artifact, index) => (

                        <div
                            key={index}
                            style={{
                                padding: "10px 0",
                                borderBottom:
                                    index !== artifacts.length - 1
                                        ? "1px solid #374151"
                                        : "none"
                            }}
                        >

                            ⭐ {artifact}

                        </div>

                    ))

                )

            }

        </div>

    );

}