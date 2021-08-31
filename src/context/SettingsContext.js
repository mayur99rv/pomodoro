import { createContext, useEffect, useState } from "react";
import useSound from "use-sound";
import public_bell from "../public_bell.mp3";

export const SettingContext = createContext();

let timerobj = localStorage.getItem("timers");
if (timerobj !== null) {
  timerobj = JSON.parse(timerobj);
  console.log("local storage timerobj" + timerobj);
}

const SettingsContextProvider = (props) => {
  // use Audio constructor to create HTMLAudioElement
  // const audioTune = new Audio("../public_bell.mp3");
  <audio className="audio-element">
    <source src="./src/public_bell.mp3"></source>
  </audio>;
  const [play] = useSound(public_bell);

  // play audio sound
  const playSound = () => {
    // audioTune.currentTime = 0;
    // audioTune.play();
    // const audioEl = document.getElementsByClassName("audio-element")[0];
    // await audioEl.play();
    play();
  };
  timerobj = localStorage.getItem("timers");
  if (timerobj !== null) {
    timerobj = JSON.parse(timerobj);
    console.log("local storage timerobj" + timerobj);
  }
  let active = undefined;
  let avalue = 0;
  if (timerobj !== null) {
    active = timerobj.active;
    switch (active) {
      case "work":
        avalue = timerobj.work;
        break;
      case "short":
        avalue = timerobj.short;
        break;
      case "long":
        avalue = timerobj.long;
        break;
      default:
        avalue = 0;
        break;
    }
  }

  // pomodoro is timer of active state
  const [pomodoro, setPomodoro] = useState(avalue === undefined ? 0 : avalue);
  //executing is the object
  const [executing, setExecuting] = useState({});

  //startanimate used for play pause
  const [startAnimate, setStartAnimate] = useState(false);

  const [shorts, setShorts] = useState(
    (localStorage.getItem("shorts") &&
      parseFloat(localStorage.getItem("shorts"))) ||
      0
  );
  const [longs, setLongs] = useState(
    (localStorage.getItem("longs") &&
      parseFloat(localStorage.getItem("longs"))) ||
      0
  );

  function startTimer() {
    setStartAnimate(true);
  }

  function pauseTimer() {
    setStartAnimate(false);
  }

  function stopTimer() {
    playSound();
    switch (executing.active) {
      case "short":
        setShorts(shorts + 1);
        console.log(shorts);
        break;
      case "long":
        setLongs(longs + 1);
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    localStorage.setItem("shorts", shorts);
    localStorage.setItem("longs", longs);
    // localStorage.setItem("last active", executing.active);

    // console.log(executing);
  }, [shorts, longs, executing]);

  const settingBtn = () => {
    setExecuting({});
    localStorage.setItem("shorts", 0);
    localStorage.setItem("longs", 0);
    // localStorage.removeItem("timer");
    setPomodoro(0);
    setLongs(0);
    setShorts(0);
  };
  const setCurrentTimer = (active_state) => {
    // console.log(active_state);
    updateExecute({
      ...executing,
      active: active_state,
    });
    setTimerTime(executing);
  };

  //executing object updated
  const updateExecute = (updatedSettings) => {
    //to change active state
    setExecuting(updatedSettings); // from use-state
    setTimerTime(updatedSettings); // function
  };
  //evaluate is the object executing
  const setTimerTime = (evaluate) => {
    switch (evaluate.active) {
      case "work":
        setPomodoro(evaluate.work);
        break;

      case "short":
        setPomodoro(evaluate.short);
        break;

      case "long":
        setPomodoro(evaluate.long);
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
