import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingContext } from "../context/SettingsContext";

const CoundownAnimation = ({
  key = 1,
  timer = 1,
  animate = true,
  children,
}) => {
  const { stopTimer } = useContext(SettingContext);

  return (
    <div>
      <CountdownCircleTimer
        key={key}
        isPlaying={animate}
        duration={timer * 60}
        size={220}
        colors={[
          ["#004777", 0.33],
          ["#F7B801", 0.33],
          ["#A30000", 0.33],
        ]}
        strokeWidth={6}
        trailColor="#151932"
        onComplete={() => {
          stopTimer();
          return [true, 1500];
        }}
      >
        {children}
      </CountdownCircleTimer>
    </div>
  );
};

export default CoundownAnimation;
