import ObservationSelector from "./ObservationSelector";

export default function ObservationEncounter(previousObservationId = null) {

    const observation =
        ObservationSelector(previousObservationId);

    if (!observation) {
        return null;
    }

    return {
        encounterId:
            `encounter-${Date.now()}`,

        observationId:
            observation.id,

        observation,

        selectionMethod:
            "stochastic",

        createdAt:
            new Date().toISOString(),
    };
}