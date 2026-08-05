export default function ArtifactPage() {
    return (
        <div
            style={{
                maxWidth: "900px",
                margin: "40px auto",
                padding: "40px",
                background: "#111827",
                border: "1px solid #6fc7ff",
                borderRadius: "12px",
                color: "white"
            }}
        >
            <h1 style={{ color: "#8fd3ff" }}>
                🖼 Artifact Museum
            </h1>

            <hr />

            <h2>Bone Head ED</h2>

            <p>
                <strong>Artifact Number:</strong> 1a
            </p>

            <p>
                <strong>Twin:</strong> Neanderthal NATHAN
            </p>

            <p>
                <strong>Galaxy:</strong> ANS1
            </p>

            <p>
                <strong>Status:</strong> Prototype Museum Exhibit
            </p>

            <div
                style={{
                    marginTop: "40px",
                    padding: "30px",
                    border: "1px dashed #555",
                    borderRadius: "10px"
                }}
            >
                🖼 Artwork Coming Soon
            </div>

            <div
                style={{
                    marginTop: "40px"
                }}
            >
                <h3>Curator Notes</h3>

                <p>
                    Every artifact has a story.
                    This page will eventually preserve
                    its history, artwork, market data,
                    commentary, and relationships.
                </p>
            </div>
        </div>
    );
}