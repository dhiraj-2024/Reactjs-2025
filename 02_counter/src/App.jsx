import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addvalue = () => {
    if (counter == 20) {
      addvalue(false);
    }
    setCounter(counter + 1);
  };

  const subtractvalue = () => {
    if (counter == 0) {
      subtractvalue(false);
    }
    setCounter(counter - 1);
  };

  return (
    <div>
      <p>Counter : {counter} </p>
      <button onClick={addvalue}>click to ADD</button> <br />
      <button onClick={subtractvalue}>click to SUBTRACT</button>
    </div>
  );
}

export default App;
