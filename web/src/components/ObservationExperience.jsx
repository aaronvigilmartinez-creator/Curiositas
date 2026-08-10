import ObservationEncounter from "./ObservationEncounter";

export default function ObservationExperience() {

    const encounter = ObservationEncounter();

    if (!encounter || !encounter.observation) {
        return null;
    }

    const observation = encounter.observation;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                background: "#000000",

                overflow: "hidden",
            }}
        >

            <img
                src={observation.image}
                alt={observation.title}
                style={{
                    width: "100%",
                    height: "100%",

                    objectFit: "contain",

                    display: "block",
                }}
            />

        </div>
    );
}