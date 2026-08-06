import universe from "../data/gpk_universe.json";

export function getGalaxySummary(galaxyName) {

    const galaxy = universe[galaxyName];

    if (!galaxy) {

        return null;

    }

    const artifacts = galaxy.filter(

        card => card["Unnamed: 1"]

    );

    return {

        galaxy: galaxyName,

        totalArtifacts: artifacts.length,

        releaseInformation:

            galaxy[0]?.["All New Series 1 — Base Set Checklist"] ||

            "Unknown",

    };

}