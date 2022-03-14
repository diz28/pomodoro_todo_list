import "./components/App.css";
import Timer from "./Timer";
import React, { useState } from "react";
import SettingContext from "./components/SettingContext";

const Input = ({ label, handleChange }) => (
  <>
    <label>{label}</label>
    <input type={"number"} min="1" onChange={handleChange} />
  </>
);

function Pomodoro() {
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  function handleChangeWorkTime(e) {
    setWorkMinutes(e.target.value);
  }
  function handleChangeBreakTime(e) {
    setBreakMinutes(e.target.value);
  }

  React.useEffect(() => {
    const workData = localStorage.getItem("my-data-workMinutes");
    if (workData) {
      setWorkMinutes(JSON.parse(workData));
    }
    const breakData = localStorage.getItem("my-data-breakMinutes");
    if (breakData) {
      setWorkMinutes(JSON.parse(breakData));
    }
  }, []);
  React.useEffect(() => {
    localStorage.setItem("my-data-workMinutes", JSON.stringify(workMinutes));
    localStorage.setItem("my-data-breakMinutes", JSON.stringify(breakMinutes));
  });

  return (
    <div>
      <Input label="Work: " handleChange={handleChangeWorkTime} />
      <> </>
      <Input label="Break: " handleChange={handleChangeBreakTime} />
      <SettingContext.Provider
        value={{
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        <Timer />
      </SettingContext.Provider>
    </div>
  );
}

export default Pomodoro;
