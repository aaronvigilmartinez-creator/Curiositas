import { useState } from "react";
import ArtifactCard from "./ArtifactCard";

export default function ArtifactViewer({ galaxy, galaxyData }) {

    const [selectedCard, setSelectedCard] = useState(null);

    if (!galaxyData) {
        return null;
    }

    // Only rows that contain actual sticker numbers
    const cards = galaxyData.filter(record => {

        const sticker = record["Unnamed: 1"];

        return sticker && /^\d+[ab]$/i.test(sticker);

    });

    return (

        <div
            style={{
                maxWidth: "1000px",
                margin: "40px auto",
                padding: "30px",
                background: "#111827",
                border: "1px solid #6fc7ff",
                borderRadius: "12px"
            }}
        >

            <h2
                style={{
                    color: "#8fd3ff",
                    textAlign: "center"
                }}
            >
                🌌 {galaxy}
            </h2>

            <p
                style={{
                    textAlign: "center",
                    marginBottom: "30px"
                }}
            >
                Cards Found: {cards.length}
            </p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(260px,1fr))",
                    gap: "20px"
                }}
            >

                {cards.map((card, index) => (

                    <ArtifactCard
                        key={index}
                        card={card}
                        onSelect={setSelectedCard}
                    />

                ))}

            </div>

            {selectedCard && (

                <div
                    style={{
                        marginTop: "40px",
                        padding: "30px",
                        background: "#0d1524",
                        border: "1px solid #6fc7ff",
                        borderRadius: "12px"
                    }}
                >

                    <h2 style={{ color: "#8fd3ff" }}>
                        🃏 {selectedCard["Unnamed: 2"]}
                    </h2>

                    <p>
                        <strong>Sticker:</strong> {selectedCard["Unnamed: 1"]}
                    </p>

                    <p>
                        <strong>Twin:</strong> {selectedCard["Unnamed: 4"]}
                    </p>

                    <p>
                        <strong>Galaxy:</strong> {galaxy}
                    </p>

                    <p>
                        <strong>Status:</strong> Not in Collection
                    </p>

                </div>

            )}

        </div>

    );

}