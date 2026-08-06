import universe from "../data/gpk_universe.json";

export function findArtifact(artifactId) {

    for (const galaxy of Object.keys(universe)) {

        const cards = universe[galaxy];

        const artifact = cards.find(

            card => card["Unnamed: 1"] === artifactId

        );

        if (artifact) {

            return {

                galaxy,

                artifact

            };

        }

    }

    return null;

}