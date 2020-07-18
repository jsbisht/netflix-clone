import React, { useState, useEffect } from "react";
import useApiData from "../../hooks/useApiData";
import { imageUrlPrefix } from "../../utils/constants";
import "../../assets/index.scss";

function Tiles({ url, isLargeTile = false }) {
  const [tiles] = useApiData(url);
  const classes = isLargeTile ? "tile tile_posterLarge" : "tile";
  const imageType = isLargeTile ? "poster_path" : "backdrop_path";
  return tiles ? (
    <div className="tiles">
      {tiles.map((tile) => (
        <img
          className={classes}
          src={`${imageUrlPrefix}${tile[imageType]}`}
          alt={tile.title}
        />
      ))}
    </div>
  ) : null;
}

export default Tiles;
