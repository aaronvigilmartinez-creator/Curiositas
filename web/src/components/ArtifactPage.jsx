import { useParams } from "react-router-dom";

import universe from "../data/gpk_universe.json";

export default function ArtifactPage() {

    const { artifactId } = useParams();

    let artifact = null;
    let galaxyName = "";

    for (const galaxy of Object.keys(universe)) {

        const cards = universe[galaxy];

        const found = cards.find(
            (card) => card["Unnamed: 1"] === artifactId
        );

        if (found) {
            artifact = found;
            galaxyName = galaxy;
            break;
        }
    }

    if (!artifact) {

        return (

            <div
                style={{
                    color: "white",
                    textAlign: "center",
                    padding: "60px"
                }}
            >
                <h2>Artifact Not Found</h2>
            </div>

        );

    }

    const imagePath = `/src/assets/cards/${galaxyName}/${artifactId}.webp`;

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

            <h1
                style={{
                    color: "#8fd3ff",
                    textAlign: "center"
                }}
            >
                🖼 Artifact Museum
            </h1>

            <hr />

            <h2 style={{ textAlign: "center" }}>
                {artifact["Unnamed: 2"]}
            </h2>

            <div
                style={{
                    textAlign: "center",
                    marginTop: "20px"
                }}
            >

                <img
                    src={imagePath}
                    alt={artifact["Unnamed: 2"]}
                    style={{
                        width: "300px",
                        borderRadius: "10px",
                        border: "2px solid #6fc7ff"
                    }}
                    onError={(e) => {

                        e.target.style.display = "none";

                    }}
                />

            </div>

            <div
                style={{
                    marginTop: "30px",
                    textAlign: "center",
                    fontSize: "22px",
                    lineHeight: "1.8"
                }}
            >

                <div>

                    <strong>Artifact Number:</strong>{" "}
                    {artifact["Unnamed: 1"]}

                </div>

                <div>

                    <strong>Twin:</strong>{" "}
                    {artifact["Unnamed: 4"]}

                </div>

                <div>

                    <strong>Galaxy:</strong>{" "}
                    {galaxyName}

                </div>

                <div>

                    <strong>Status:</strong> Prototype Museum Exhibit

                </div>

            </div>

            <div
                style={{
                    marginTop: "40px",
                    padding: "25px",
                    border: "1px dashed #444",
                    borderRadius: "10px",
                    textAlign: "center"
                }}
            >

                <h3>Curator Notes</h3>

                <p>
                    Every artifact has a story. This page will eventually preserve
                    its history, artwork, market data, commentary, and relationships.
                </p>

            </div>

        </div>

    );

}