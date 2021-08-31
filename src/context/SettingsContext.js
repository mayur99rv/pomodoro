import { createContext, useState } from "react";

export const SettingContext = createContext();
let prev = 0;
console.log(prev);
let timerobj = localStorage.getItem("timers");
timerobj = JSON.parse(timerobj);
console.log(timerobj);
let active = undefined;
let value = 0;
const SettingsContextProvider = (props) => {
  if (timerobj) {
    active = timerobj.active;
    switch (active) {
      case "work":
        value = timerobj.work;
        break;
      case "short":
        value = timerobj.short;
        break;
      case "long":
        value = timerobj.long;
        break;
      default:
        value = 0;
        break;
    }
  }
  console.log(value);
  const [pomodoro, setPomodoro] = useState(value);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);

  const [shorts, setShorts] = useState(
    (localStorage.getItem("shorts") && localStorage.getItem("shorts")) || 0
  );
  const [longs, setLongs] = useState(
    (localStorage.getItem("longs") && localStorage.getItem("longs")) || 0
  );

  function startTimer() {
    setStartAnimate(true);
  }

  function pauseTimer() {
    setStartAnimate(false);
  }

  function stopTimer() {
    // setStartAnimate(false);
    switch (executing.active) {
      case "work":
        break;
      case "short":
        setShorts(shorts + 1);
        localStorage.setItem("shorts", shorts);
        console.log(shorts);
        break;
      case "long":
        setLongs(longs + 1);
        localStorage.setItem("longs", longs);
        break;
      default:
        break;
    }
  }

  const updateExecute = (updatedSettings) => {
    setExecuting(updatedSettings); // from use-state
    setTimerTime(updatedSettings); // function
  };
  const settingBtn = () => {
    setExecuting({});
    localStorage.setItem("shorts", 0);
    localStorage.setItem("longs", 0);
    localStorage.removeItem("timer");
    setPomodoro(0);
    setLongs(0);
    setShorts(0);
  };
  const setCurrentTimer = (active_state) => {
    console.log(active_state);
    updateExecute({
      ...executing,
      active: active_state,
    });
    setTimerTime(executing);
  };

  const setTimerTime = (evaluate) => {
    switch (evaluate.active) {
      case "work":
        setPomodoro(evaluate.work);
        prev = evaluate.work;
        break;
      case "short":
        setPomodoro(evaluate.short);
        prev = evaluate.short;
        break;
      case "long":
        setPomodoro(evaluate.long);
        prev = evaluate.long;
        break;
      default:
        setPomodoro(0);
        break;
    }
  };

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${minutes} : ${seconds}`;
  };

  return (
    <SettingContext.Provider
      value={{
        stopTimer,
        updateExecute,
        pomodoro,
        executing,
        startAnimate,
        startTimer,
        pauseTimer,
        settingBtn,
        setCurrentTimer,
        children,
        shorts,
        longs,
        setLongs,
        setShorts,
      }}
    >
      {props.children}
    </SettingContext.Provider>
  );
};

export default SettingsContextProvider;
