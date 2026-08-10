import { useState } from "react";
import ObservationSelector from "./ObservationSelector";

export default function ObservationEncounter() {

    const [encounter] = useState(() => {

        const observation = ObservationSelector();

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

    });

    return encounter;
}