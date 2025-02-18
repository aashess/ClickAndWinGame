import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Main_func({ count, randomValue, setCount, setRandomValue }) {
  const handle_check = () => {
    if (count == randomValue) {
      alert("You WON");
      handleReset();
    } else {
      alert("YOU Loss");
    }
  };

  function handleReset() {
    let assignValue = Math.floor(Math.random() * 10);
    setRandomValue(assignValue);
    setCount(0);
  }

  return (
    <div className="container">
      <h2>User Clicked: {count}</h2>

      <button className="otherButton1" onClick={() => setCount(count + 1)}>
        Next
      </button>

      <button id="otherButton2" onClick={handleReset}>
        Reset
      </button>

      <button id="otherButton3" onClick={() => setCount(count - 1)}>
        Decrease
      </button>
      <br />

      <button id="submit" onClick={handle_check}>
        Submit
      </button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [randomValue, setRandomValue] = useState(Math.floor(Math.random() * 10));

  useEffect(() => {
    console.log(`random_num: ${randomValue}`);
  }, [randomValue]);

  return (
    <>
      <Main_func
        count={count}
        setCount={setCount}
        randomValue={randomValue}
        setRandomValue={setRandomValue}
      />
    </>
  );
}

export default App;