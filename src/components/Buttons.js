import React from "react";

const Buttons = ({ title, activeClass, _callback }) => {
  return (
    <div>
      <button className={activeClass} onClick={_callback}>
        {title}
      </button>
    </div>
  );
};

export default Buttons;
