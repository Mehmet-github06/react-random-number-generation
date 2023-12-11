import { useState } from "react";
import "./style.css";

function App() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [randomNum, setRandomNum] = useState("?");
  // const [reset, setReset] = useState("");

  const giveRandomNum = ()=> {
    setRandomNum(Math.floor(Math.random()* (max-min +1) + min))
  }

  const resetNum = ()=>{
    setMax("");
    setMin("");
    setRandomNum("?")
  }




  return (
    <div className="hero">
      <div className="container">
        <div className="randomNum">
          <p>
            Random Number : <span>{randomNum}</span>
          </p>
        </div>
        <div className="numContainer">
          <div>
            <p>Min Number ❔</p>
            <input
              type="text"
              value={min}
              onChange={(e) => setMin(+e.target.value)}
            />
          </div>
          <div className="ptexet">
            <p>Max Number ❔</p>
            <input
              type="text"
              value={max}
              onChange={(e) => setMax(+e.target.value)}
            />
          </div>
        </div>
        <button onClick={giveRandomNum}>Get Random Number</button>
        <button onClick={resetNum}>Reset</button>
      </div>
    </div>
  );
}

export default App;
