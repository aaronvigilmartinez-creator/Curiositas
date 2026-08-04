import { useState } from "react";
import ArtifactViewer from "./ArtifactViewer";

export default function Observatory({ galaxies, universe }) {

    const [selectedGalaxy, setSelectedGalaxy] = useState(null);

    const galaxyData =
        selectedGalaxy
            ? universe[selectedGalaxy]
            : null;

    return (

        <div style={{ textAlign: "center" }}>

            <h2>🔭 Observatory</h2>

            <p>Known Galaxies</p>

            <ul
                style={{
                    listStyle: "none",
                    padding: 0
                }}
            >

                {galaxies.map((galaxy) => (

                    <li
                        key={galaxy}
                        onClick={() => setSelectedGalaxy(galaxy)}
                        style={{
                            cursor: "pointer",
                            padding: "8px",
                            fontSize: "1.1rem"
                        }}
                    >

                        ⭐ {galaxy}

                    </li>

                ))}

            </ul>

            <ArtifactViewer
                galaxy={selectedGalaxy}
                galaxyData={galaxyData}
            />

        </div>

    );

}