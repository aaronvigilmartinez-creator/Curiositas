import { useParams, Link } from "react-router-dom";
import universe from "../data/gpk_universe.json";

import MuseumPanel from "./MuseumPanel";
import ConstellationPanel from "./ConstellationPanel";

export default function ArtifactPage() {

    const { artifactId } = useParams();

    let artifact = null;
    let galaxyName = "";

    for (const galaxy of Object.keys(universe)) {

        const cards = universe[galaxy];

        const found = cards.find(
            card => card["Unnamed: 1"] === artifactId
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
                    padding: "80px",
                    textAlign: "center"
                }}
            >
                <h2>Artifact Not Found</h2>

                <Link to="/">
                    ← Return to Observatory
                </Link>

            </div>
        );

    }

    const imagePath = `/src/assets/cards/${galaxyName}/${artifactId}.webp`;

    const relatedArtifacts = [

        artifact["Unnamed: 4"],

        "On Fire MARIAH",

        "Bustin' JUSTIN",

        "Cootie CODY"

    ];

    return (

        <div
            style={{
                maxWidth: "1200px",
                margin: "40px auto",
                padding: "30px",
                color: "white"
            }}
        >

            <div
                style={{
                    textAlign: "center",
                    marginBottom: "40px"
                }}
            >

                <div
                    style={{
                        letterSpacing: "4px",
                        color: "#6fc7ff",
                        fontSize: "14px"
                    }}
                >
                    CURIOSITAS MUSEUM
                </div>

                <h1>{artifact["Unnamed: 2"]}</h1>

                <div
                    style={{
                        color: "#9ca3af"
                    }}
                >
                    {galaxyName} • Artifact {artifact["Unnamed: 1"]}
                </div>

            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr",
                    gap: "30px",
                    alignItems: "start"
                }}
            >

                <div
                    style={{
                        background: "#111827",
                        border: "1px solid #6fc7ff",
                        borderRadius: "14px",
                        padding: "30px",
                        textAlign: "center"
                    }}
                >

                    <img
                        src={imagePath}
                        alt={artifact["Unnamed: 2"]}
                        style={{
                            width: "100%",
                            maxWidth: "420px",
                            borderRadius: "12px"
                        }}
                        onError={(e) => {

                            e.target.style.display = "none";

                        }}
                    />

                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px"
                    }}
                >

                    <MuseumPanel title="Artifact Information">

                        <p><strong>Galaxy</strong><br />{galaxyName}</p>

                        <p><strong>Artifact</strong><br />{artifact["Unnamed: 1"]}</p>

                        <p><strong>Twin</strong><br />{artifact["Unnamed: 4"]}</p>

                        <p><strong>Status</strong><br />Museum Prototype</p>

                    </MuseumPanel>

                    <ConstellationPanel

                        title="Constellation"

                        artifacts={relatedArtifacts}

                    />

                    <MuseumPanel title="Curator Notes">

                        <p>

                            Every artifact has a story.

                            Curiositas preserves not merely
                            the object...

                            but the meaning attached to it.

                        </p>

                    </MuseumPanel>

                </div>

            </div>

            <div
                style={{
                    marginTop: "50px",
                    textAlign: "center"
                }}
            >

                <Link
                    to="/"
                    style={{
                        color: "#6fc7ff",
                        textDecoration: "none",
                        fontWeight: "bold"
                    }}
                >
                    ← Return to Observatory
                </Link>

            </div>

        </div>

    );

}