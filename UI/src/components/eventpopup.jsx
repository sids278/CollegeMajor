import React from "react";
import Event from "./event";
import "../../src/App.css";

const EventPopup = ({ event, onClose }) => {
    return (
      <div className="popup">
        <div className="popup-content">
          <Event event={event}/>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };

export default EventPopup;