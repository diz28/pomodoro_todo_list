import React, { Component } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayBtn from "./components/PlayBtn";
import PauseBtn from "./components/PauseBtn";
import SettingBtn from "./components/SettingBtn";
export default class Timer extends Component {
  render = () => {
    return (
      <div style={{ width: 500, height: 500 }}>
        <CircularProgressbar
          value={60}
          text={"60%"}
          styles={buildStyles({
            strokeLinceCap: "butt",
            textColor: "#000000",
            pathColor: "#008000",
            trailColor: "#A9A9A9",
          })}
        />
        <div class="d-flex justify-content-center">
          <PauseBtn />
          <PlayBtn />
          <SettingBtn />
        </div>
      </div>
    );
  };
}
