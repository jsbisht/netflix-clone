import React, { useState, useEffect } from "react";
import axios from "axios";
import apis from "../../utils/apis";
import "./index.scss";
import { imageUrlPrefix } from "../../utils/constants";

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function Banner(props) {
  const [banner, setBanner] = useState(null);
  const getData = async () => {
    const results = await axios.get(apis.fetchNetflixOriginals);
    const items = results.data.results;
    const index = randomNumber(0, items.length - 1);
    const selected = items[index];
    setBanner(selected);
  };
  useEffect(() => {
    getData();
  }, []);
  if (banner) {
    const path = banner.poster_path ? banner.poster_path : "";
    const styles = {
      backgroundImage: `url(${imageUrlPrefix}${path})`,
      backgroundColor: "black",
    };
    return (
      <div className="banner" style={styles}>
        <div class="banner_contents">
          <h1 class="banner_title">{banner.original_name}</h1>
          <div class="banner_buttons">
            <button class="banner_button">Play</button>
            <button class="banner_button">My List</button>
          </div>
          <h1 class="banner_description">{banner.overview}</h1>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Banner;
