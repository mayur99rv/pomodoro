import React, { useContext } from "react";
import Buttons from "./Buttons";
import { useState } from "react";
import { SettingContext } from "../context/SettingsContext";
const SetPomodoro = () => {
  const [newTimer, setNewTimer] = useState({
    // work: 0.3,
    // short: 0.1,
    // long: 0.2,
    active: "work",
  });
  const [work, setWork] = useState(newTimer.work);
  const [short, setShort] = useState(newTimer.short);
  const [long, setLong] = useState(newTimer.long);

  const { updateExecute } = useContext(SettingContext);

  const handleChange = (input) => {
    const { name, value } = input.target;
    switch (name) {
      case "work":
        setWork(input.target.value);
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;
      case "shortBreak":
        setShort(input.target.value);
        setNewTimer({
          short: parseInt(value),
          ...newTimer,
        });
        break;
      case "longBreak":
        setLong(input.target.value);
        setNewTimer({
          long: parseInt(value),
          ...newTimer,
        });
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("timers", JSON.stringify(newTimer));
    updateExecute(newTimer);
  };
  return (
    <div className="form-container">
      <form noValidate>
        <div className="input-wrapper">
          <h3>Make Necessary Changes here. </h3>
          <label className="input">
            Working Time:
            <input name="work" onChange={handleChange} value={work} />
          </label>
          <label className="input">
            Shortbreak Time:
            <input name="shortBreak" onChange={handleChange} value={short} />
          </label>
          <label className="input">
            Longbreak time:
            <input name="longBreak" onChange={handleChange} value={long} />
          </label>
          <Buttons title="Set Timer" _callback={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default SetPomodoro;
