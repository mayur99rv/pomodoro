import React from "react";

const Buttons = ({ title, activeClass, _callback }) => {
  return (
    <div>
      <button
        className={activeClass}
        disabled={activeClass !== "redb" ? false : true}
        onClick={_callback}
      >
        {title}
      </button>
    </div>
  );
};

export default Buttons;
