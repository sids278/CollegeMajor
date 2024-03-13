import React from "react";
import Event from "./event";
<<<<<<< HEAD:src/components/eventpopup.js
import "../../src/styles.css";
=======
import "../../src/App.css";
>>>>>>> 2e789537f075fd6f56c777fb6e4a6568e7a3912b:UI/src/components/eventpopup.jsx

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