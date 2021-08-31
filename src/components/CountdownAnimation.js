import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingContext } from "../context/SettingsContext";

const CoundownAnimation = ({
  key1 = 1,
  timer = 1,
  animate = true,
  children,
}) => {
  const { stopTimer } = useContext(SettingContext);

  return (
    <div>
      <CountdownCircleTimer
        key={key1}
        isPlaying={animate}
        duration={timer * 60}
        size={220}
        colors={[
          ["#d15d5d", 0.05],
          ["#d15dd1", 0.05],
          ["#5d72d1", 0.15],
          ["#bcd15d", 0.15],
          ["#82d15d", 0.1],
          ["#F7B801", 0.25],
          ["#A30000", 0.25],
        ]}
        strokeWidth={8}
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
