import React from "react";
import "../css/WorldMap.css";
import worldMap from "E:/MERN/VCode/Game-Dashboard/src/assets/worldmap.png";

const WorldMap = () => {
  return (
    <div className="worldMap">
      <img src={worldMap} alt="World Map" />
    </div>
  );
};

export default WorldMap;
