export default function ArtifactCard({ card, onSelect }) {

    return (

        <div
            onClick={() => onSelect(card)}
            style={{
                cursor: "pointer",
                background: "#1b2435",
                padding: "20px",
                borderRadius: "10px",
                border: "1px solid #333",
                transition: "0.2s",
                textAlign: "center"
            }}
        >

            <h3
                style={{
                    color: "#8fd3ff",
                    marginBottom: "15px"
                }}
            >
                {card["Unnamed: 2"]}
            </h3>

            <p>
                <strong>Sticker:</strong> {card["Unnamed: 1"]}
            </p>

            <p>
                <strong>Twin:</strong> {card["Unnamed: 4"]}
            </p>

            <button
                style={{
                    marginTop: "15px",
                    padding: "8px 16px",
                    background: "#6fc7ff",
                    color: "#111827",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "bold"
                }}
            >
                View Artifact →
            </button>

        </div>

    );

}