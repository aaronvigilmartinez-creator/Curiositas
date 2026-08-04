import universe from "./data/gpk_universe.json";

import Header from "./components/Header";
import Observatory from "./components/Observatory";

export default function App() {

  const galaxies = Object.keys(universe);
console.log("Universe in App:", universe);
console.log("Galaxies in App:", galaxies);
  return (

    <div
      style={{
        background:"#050816",
        color:"white",
        minHeight:"100vh"
      }}
    >

      <Header />

      <hr />

      <Observatory
    galaxies={galaxies}
    universe={universe}
/>

    </div>

  );

}