import "./components/App.css";
import Timer from "./Timer";
import React, { useState } from "react";
import SettingContext from "./components/SettingContext";

/**
 * handlds user input that sets up the timmer
 * @param  {} label labels for the inputs
 * @param  {} handleChange changes countdown minutes
 */
const Input = ({ label, handleChange }) => (
  <>
    <label>{label}</label>
    <input type={"number"} min="1" onChange={handleChange} />
  </>
);

/**
 * set up the pomodoro timer for the user
 */
function Pomodoro() {
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);
  /**
   * handles the work time when user changes the time
   */
  function handleChangeWorkTime(e) {
    setWorkMinutes(e.target.value);
  }
  /**
   * handles the break time when user changes the time
   */
  function handleChangeBreakTime(e) {
    setBreakMinutes(e.target.value);
  }

  /**
   * return method
   */
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
