import { Link } from "react-router-dom";

export default function ArtifactCard({ card }) {

    return (

        <div
            style={{
                background: "#1f2937",
                border: "1px solid #3b4252",
                borderRadius: "14px",
                padding: "24px",
                textAlign: "center",
                boxShadow: "0 0 12px rgba(0,0,0,.25)"
            }}
        >

            <div
                style={{
                    fontSize: "3rem"
                }}
            >
                🖼️
            </div>

            <h2
                style={{
                    color: "#8fd3ff"
                }}
            >
                {card["Unnamed: 2"]}
            </h2>

            <p>
                <strong>Artifact No.</strong>
                <br />
                {card["Unnamed: 1"]}
            </p>

            <hr />

            <p>
                <strong>Twin Artifact</strong>
                <br />
                {card["Unnamed: 4"]}
            </p>

            <Link to="/artifact">

                <button
                    style={{
                        marginTop: "20px",
                        background: "#6fc7ff",
                        color: "#111827",
                        border: "none",
                        padding: "12px 22px",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        cursor: "pointer"
                    }}
                >
                    Enter Museum →
                </button>

            </Link>

        </div>

    );

}