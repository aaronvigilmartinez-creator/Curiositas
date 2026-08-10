import ObservationalLibrary from "./ObservationalLibrary";

export default function ObservationSelector(previousObservationId = null) {

    const observations = ObservationalLibrary();

    if (!observations || observations.length === 0) {
        return null;
    }

    const availableObservations =
        observations.length > 1
            ? observations.filter(
                  (observation) =>
                      observation.id !== previousObservationId
              )
            : observations;

    const randomIndex = Math.floor(
        Math.random() * availableObservations.length
    );

    return availableObservations[randomIndex];
}