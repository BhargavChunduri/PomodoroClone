import Header from "./components/header/header";
import "./App.css";
import Timer from "./components/timer/timer";
import { useState } from "react";
function App() {
  const [backGround, setBackGround] = useState("bg-red-400");
  const getBackgroundColor = (timerType: string) => {
    if (timerType === "pomodoro") {
      setBackGround("bg-teal-500");
    } else if (timerType === "Short Break") {
      setBackGround("bg-green-500");
    } else {
      setBackGround("bg-blue-400");
    }
  };
  return (
    <>
      <div className={`components ${backGround}`}>
        <Header />
        <Timer func={getBackgroundColor} />
      </div>
    </>
  );
}

export default App;
