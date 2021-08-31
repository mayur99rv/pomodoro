import { useContext, useEffect } from "react";
import Buttons from "./components/Buttons";
import CoundownAnimation from "./components/CountdownAnimation";
import SetPomodoro from "./components/SetPomodoro";
import { SettingContext } from "./context/SettingsContext";

function App() {
  const {
    pomodoro,
    executing,
    setCurrentTimer,
    settingBtn,
    children,
    startAnimate,
    startTimer,
    pauseTimer,
    updateExecute,
    shorts,
    longs,
  } = useContext(SettingContext);

  useEffect(() => {
    updateExecute(executing);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [executing, startAnimate]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shorts, longs]);

  return (
    <div className="container">
      <h1>pomodoro</h1>
      <small>Be productive the right way.</small>
      {console.log("po " + pomodoro)}
      {pomodoro === 0 ? (
        <SetPomodoro />
      ) : (
        <>
          <ul className="labels">
            <li>
              <Buttons
                title="Work"
                activeClass={executing.active === "work" ? "active-label" : ""}
                _callback={() => setCurrentTimer("work")}
              />
            </li>
            <li>
              <Buttons
                title="Short Break"
                activeClass={executing.active === "short" ? "active-label" : ""}
                _callback={() => setCurrentTimer("short")}
              />
            </li>
            <li>
              <Buttons
                title="Long Break"
                activeClass={executing.active === "long" ? "active-label" : ""}
                _callback={() => setCurrentTimer("long")}
              />
            </li>
          </ul>
          <Buttons title="Settings" _callback={settingBtn} />
          <div className="time-container">
            <div className="time-wrapper">
              <CoundownAnimation
                key1={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {children}
              </CoundownAnimation>
            </div>
          </div>

          <div className="button-wrapper">
            <Buttons
              title="Start"
              activeClass={startAnimate === true ? "start" : ""}
              _callback={startTimer}
            />
            <Buttons
              title="Pause"
              activeClass={!startAnimate === true ? "pause" : ""}
              _callback={pauseTimer}
            />
            <Buttons
              title="Reset"
              activeClass={"reset"}
              _callback={settingBtn}
            />
          </div>

          <div>
            <h1>Your logs</h1>
            <h3>Short breaks taken: {shorts} </h3>
            <h3>Long breaks taken: {longs} </h3>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
