import { useState, useRef } from "react";
import "./timer.css";

function Timer(props:{func:(timerType:string)=>void}) {
  const [time, setTime] = useState("25 : 00");
  const [isClicked, setIsClicked] = useState(false);
  const [timerTypeBG , setTimerTypeBG] = useState("hover:bg-purple-500 focus:bg-slate-500");
  const stopInterval = useRef(0);
  const initializeTimer = (time: string) => {
    setTime(`${time} : 00`);
    setTimerTypeBG(" hover:bg-purple-500 focus:bg-slate-500")
    if (time === "25") {
      props.func("pomodoro");
    }else if(time ==="5"){
      props.func("Short Break");
    }else{
      props.func("Long Break");
    }
    clearInterval(stopInterval.current);
    setIsClicked(false);
  };
  function startTimer(time: string) {
    setIsClicked(!isClicked);
    if (!isClicked) {
      //setIsClicked(true)
      const splitTime = time.split(":");
      let secondsTime =
        parseInt(splitTime[0].trim()) * 60 + parseInt(splitTime[1].trim());
      stopInterval.current = setInterval(() => {
        secondsTime -= 1;
        const minuteTime = `${Math.floor(secondsTime / 60)}: ${Math.floor(
          secondsTime % 60
        )}`;
        if (minuteTime === "0: 0") {
          clearInterval(stopInterval.current);
        }
        setTime(minuteTime);
      }, 1000);
    } else {
      clearInterval(stopInterval.current);
      //setIsClicked(false);
    }
  }
  return (
    <>
      <div className="timerTypeContainer">
        <ol className="timerType">
          <li className={`${timerTypeBG}`} onClick={() => initializeTimer("25")}>pomodoro</li>
          <li className={`${timerTypeBG}`} onClick={() => initializeTimer("5")}>Short Break</li>
          <li className={`${timerTypeBG}`} onClick={() => initializeTimer("15")}>Long Break</li>
        </ol>
        <div className="timerContainer">
          <div className="time">{time}</div>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => startTimer(time)}
          >
            {isClicked ? "Pause" : "Start"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Timer;
