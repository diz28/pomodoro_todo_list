import { useContext } from "react";
import ReactSlider from "react-slider";
import SettingContext from "./SettingContext";
import "./slider.css";

function Setting(props) {
  const settingInfo = useContext(SettingContext);
  return (
    <div style={{ textAlign: "left" }}>
      <label>study time: {settingInfo.studyTime}</label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingInfo.studyTime}
        min={1}
        max={120}
      />
      <label>break time: {settingInfo.breakTime} </label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingInfo.breakTime}
        min={1}
        max={120}
      />
    </div>
  );
}

export default Setting;
