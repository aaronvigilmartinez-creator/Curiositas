import cosmicCliffs from "../assets/observations/cosmic-cliffs-ngc-3324.png";

export default function ObservationalLibrary() {

    const observations = [

        {
            id: "webb-ngc-3324-cosmic-cliffs",

            title: "Cosmic Cliffs",

            source: "NASA",

            mission: "James Webb Space Telescope",

            instrument: "NIRCam + MIRI",

            object: "Carina Nebula, NGC 3324",

            objectDescription:
                "Star-forming region in the Carina Nebula",

            observationDate:
                "June 3, 2022 and June 11, 2022",

            releaseDate:
                "July 12, 2022",

            distance:
                "7,600 light-years",

            image: cosmicCliffs,

            credit:
                "NASA, ESA, CSA, STScI",

            sourceUrl:
                "https://science.nasa.gov/asset/webb/cosmic-cliffs-in-the-carina-nebula-nircam-and-miri-composite-image/",

            usageStatus:
                "NASA-hosted image; verify usage and attribution requirements before public deployment",

            processingHistory: [
                "Webb NIRCam and MIRI observations",
                "Multiple infrared filters combined",
                "Visible colors assigned to monochromatic filter data",
                "Composite image published by NASA",
            ],

        },

    ];

    return observations;

}