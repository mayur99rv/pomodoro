import { useContext, useEffect, useState } from "react";
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
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("light");
  };
  return (
    <div className={`container ${theme === "dark" ? "dark" : ""}`}>
      <h1>pomodoro</h1>
      <small>Be productive the right way.</small>
      <Buttons
        title={`${theme === "dark" ? "Dark" : "Light"}`}
        activeClass={`themechanger ${theme === "dark" ? "dark" : ""}`}
        _callback={toggleTheme}
      />
      {pomodoro === 0 ? (
        <SetPomodoro />
      ) : (
        <>
          <ul className={`labels ${theme === "dark" ? "dark" : ""}`}>
            <li>
              <Buttons
                title="Short Break"
                activeClass={`${
                  executing.active === "short" ? "active-label" : ""
                }
                ${theme === "dark" ? "dark" : ""} `}
                _callback={() => setCurrentTimer("short")}
              />
            </li>
            <li>
              <Buttons
                title="Work"
                activeClass={`${
                  executing.active === "work" ? "active-label" : ""
                }
                ${theme === "dark" ? "dark" : ""} `}
                _callback={() => setCurrentTimer("work")}
              />
            </li>
            <li>
              <Buttons
                title="Long Break"
                activeClass={`${
                  executing.active === "long" ? "active-label" : ""
                }
                ${theme === "dark" ? "dark" : ""} `}
                _callback={() => setCurrentTimer("long")}
              />
            </li>
          </ul>
          <Buttons
            title="Settings"
            activeClass={`${theme === "dark" ? "dark" : ""}`}
            _callback={settingBtn}
          />
          <div className="time-container">
            <div className={`time-wrapper ${theme === "dark" ? "dark" : ""}`}>
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
              activeClass={`${startAnimate === true ? "start" : ""} ${
                theme === "dark" ? "dark" : ""
              }`}
              _callback={startTimer}
            />
            <Buttons
              title="Pause"
              activeClass={`${!startAnimate === true ? "pause" : ""} ${
                theme === "dark" ? "dark" : ""
              }`}
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
