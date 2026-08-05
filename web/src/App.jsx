import { Routes, Route } from "react-router-dom";

import universe from "./data/gpk_universe.json";

import Header from "./components/Header";
import Observatory from "./components/Observatory";
import ArtifactPage from "./components/ArtifactPage";

export default function App() {

    const galaxies = Object.keys(universe);

    return (

        <div
            style={{
                background: "#050816",
                color: "white",
                minHeight: "100vh"
            }}
        >

            <Header />

            <hr />

            <Routes>

                <Route
                    path="/"
                    element={
                        <Observatory
                            galaxies={galaxies}
                            universe={universe}
                        />
                    }
                />

                <Route
                    path="/artifact"
                    element={<ArtifactPage />}
                />

            </Routes>

        </div>

    );

}