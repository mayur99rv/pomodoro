import React, { useContext, useEffect } from "react";
import Buttons from "./Buttons";
import { useState } from "react";
import { SettingContext } from "../context/SettingsContext";
const SetPomodoro = () => {
  let timerobj = localStorage.getItem("timers");
  if (timerobj !== null) {
    timerobj = JSON.parse(timerobj);
  }

  const [newTimer, setNewTimer] = useState(
    timerobj !== null
      ? timerobj
      : { work: 0.3, short: 0.1, long: 0.2, active: "work" }
  );
  const [work, setWork] = useState(0.3);
  const [short, setShort] = useState(0.1);
  const [long, setLong] = useState(0.2);

  const { updateExecute } = useContext(SettingContext);

  const handleChange = (input) => {
    const { name, value } = input.target;
    switch (name) {
      case "work":
        // let mins = value / 60;
        // let secs = value % 60;
        // let sent = `${value} => ${mins} min and ${secs} seconds`;
        setWork(value);
        setNewTimer({
          ...newTimer,
          work: parseFloat(value),
          // active: "work",
        });
        break;
      case "short":
        setShort(input.target.value);
        setNewTimer({
          ...newTimer,
          short: parseFloat(value),
        });
        break;
      case "long":
        setLong(input.target.value);
        setNewTimer({
          ...newTimer,
          long: parseFloat(value),
        });
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    localStorage.setItem("timers", JSON.stringify(newTimer));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newTimer, short, long, work]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("NEwtimer ");
    // console.log(newTimer);
    setNewTimer({ ...newTimer, long, short, work });
    updateExecute(newTimer);
  };
  return (
    <div className="form-container">
      <form noValidate>
        <div className="input-wrapper">
          <h3>Make Necessary Changes here. </h3>
          <label htmlFor="work" className="input">
            Working Time:
            <input
              name="work"
              id="work"
              placeholder="value in minutes"
              onChange={handleChange}
              value={isNaN(newTimer.work) ? 0 : newTimer.work}
              className={`${isNaN(newTimer.work) ? "red" : ""}`}
            />
            Minutes
          </label>
          <label htmlFor="short" className="input">
            Shortbreak Time:
            <input
              name="short"
              id="short"
              placeholder="value in minutes"
              onChange={handleChange}
              value={isNaN(newTimer.short) ? 0 : newTimer.short}
              className={`${isNaN(newTimer.short) ? "red" : ""}`}
            />
            Minutes
          </label>
          <label htmlFor="long" className="input">
            Longbreak time:
            <input
              name="long"
              id="long"
              placeholder="value in minutes"
              onChange={handleChange}
              value={isNaN(newTimer.long) ? 0 : newTimer.long}
              className={`${isNaN(newTimer.long) ? "red" : ""}`}
            />
            Minutes
          </label>
          <Buttons
            title="Set Timer"
            activeClass={`${
              isNaN(newTimer.long) ||
              isNaN(newTimer.short) ||
              isNaN(newTimer.work)
                ? "redb"
                : ""
            }`}
            _callback={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default SetPomodoro;
