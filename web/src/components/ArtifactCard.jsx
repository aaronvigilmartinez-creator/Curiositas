export default function ArtifactCard({ card }) {
    return (
        <div
            style={{
                background: "#1f2937",
                border: "1px solid #3b4252",
                borderRadius: "14px",
                padding: "24px",
                textAlign: "center",
                transition: ".25s",
                cursor: "pointer",
                boxShadow: "0 0 12px rgba(0,0,0,.25)"
            }}
        >
            <div
                style={{
                    fontSize: "3rem",
                    marginBottom: "10px"
                }}
            >
                🖼️
            </div>

            <h2
                style={{
                    color: "#8fd3ff",
                    marginBottom: "20px"
                }}
            >
                {card["Unnamed: 2"]}
            </h2>

            <div
                style={{
                    color: "#cbd5e1",
                    marginBottom: "8px"
                }}
            >
                Artifact No.
            </div>

            <div
                style={{
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                    marginBottom: "20px"
                }}
            >
                {card["Unnamed: 1"]}
            </div>

            <hr
                style={{
                    borderColor: "#374151",
                    margin: "20px 0"
                }}
            />

            <div
                style={{
                    color: "#cbd5e1"
                }}
            >
                Twin Artifact
            </div>

            <div
                style={{
                    marginBottom: "25px",
                    fontWeight: "bold"
                }}
            >
                {card["Unnamed: 4"]}
            </div>

            <button
                style={{
                    background: "#6fc7ff",
                    color: "#111827",
                    border: "none",
                    padding: "12px 22px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    cursor: "pointer"
                }}
            >
                Enter Museum →
            </button>
        </div>
    );
}