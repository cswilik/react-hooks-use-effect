import React, { useState, useEffect } from "react";
import Clock from "./Clock"

function App() {
  const [showClock, setShowClock] = useState(true);

  
  return (
    <div>
      {showClock ? <Clock /> : null}
      <button onClick={() => setShowClock(false)}>Hide Clock</button>
    </div>
  );
}

export default App;
