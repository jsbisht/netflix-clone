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
      <Tiles url={apis.fetchActionMovies} />
      <Tiles url={apis.fetchComedyMovies} />
      <Tiles url={apis.fetchDocumentaries} />
      <Tiles url={apis.fetchHorrorMovies} />
      <Tiles url={apis.fetchRomanceMovies} />
      <Tiles url={apis.fetchNetflixOriginals} />
    </div>
  );
}

export default App;
