"use client";

import { useState, useRef } from "react";

const formatTime = (timer) => {
  const getSeconds = `0${timer % 60}`.slice(-2);
  const minutes = `${Math.floor(timer / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};

const Start = () => {
  const useTimer = (initialState = 0) => {
    const [timer, setTimer] = useState(initialState);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const countRef = useRef(null);

    const handleStart = () => {
      setIsActive(true);
      setIsPaused(true);
      countRef.current = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    };

    const handlePause = () => {
      clearInterval(countRef.current);
      setIsPaused(false);
    };

    const handleResume = () => {
      setIsPaused(true);
      countRef.current = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    };

    const handleReset = () => {
      clearInterval(countRef.current);
      setIsActive(false);
      setIsPaused(false);
      setTimer(0);
    };

    return {
      timer,
      isActive,
      isPaused,
      handleStart,
      handlePause,
      handleResume,
      handleReset,
    };
  };

  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(0);

  return (
    <div className="bg-transparent flex flex-col items-center gap-5 absolute top-[-150px] left-[-680%]">
      <div className="flex flex-col items-center border-[1px] border-solid border-[#fff] rounded-lg p-6 bg-[#c4c4c454]">
        <h3 className="text-[22px] font-bold">Start Session</h3>
        <div className="flex flex-col items-center gap-4">
          <p className="text-[20px]">{formatTime(timer)}</p>
          <div className="gap-4 flex">
            {!isActive && !isPaused ? (
              <button
                onClick={handleStart}
                className="text-[18px] font-medium border-[1px] border-solid rounded-lg px-5 py-3"
              >
                Start
              </button>
            ) : isPaused ? (
              <button
                onClick={handlePause}
                className=" text-[18px] font-medium border-[1px] border-solid rounded-lg px-5 py-3"
              >
                Pause
              </button>
            ) : (
              <button
                onClick={handleResume}
                className=" text-[18px] font-medium border-[1px] border-solid rounded-lg px-5 py-3"
              >
                Resume
              </button>
            )}
            <button
              onClick={handleReset}
              disabled={!isActive}
              className=" text-[18px] font-medium border-[1px] border-solid rounded-lg px-5 py-3"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
