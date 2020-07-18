import React from "react";
import "./App.css";
import Banner from "./components/banner";
import apis from "./utils/apis";
import Tiles from "./components/tiles";

function App() {
  return (
    <div className="App">
      <Banner />
      <Tiles url={apis.fetchTrending} isLargeTile={true} />
      <Tiles url={apis.fetchTopRated} />
    </div>
  );
}

export default App;
