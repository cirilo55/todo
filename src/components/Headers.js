import React from "react";
import "./Headers.css";

function header()
{
    return (
      <div className='header'>
          <h1>TODO</h1>
        <div onClick={handleToggle} className={`icon-${isNight ? 'light': 'dark'}`}>
          </div>
    </div>
    )
}

export default header