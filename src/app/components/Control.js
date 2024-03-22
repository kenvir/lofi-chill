"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSound } from "use-sound";
import Link from "next/link";

import ClickOutsideWrapper from "./ClickOutSide";
import Start from "./Start/page";

import modeImg from "@/src/assets/icons/mode.svg";
import templatesImg from "@/src/assets/icons/templates.svg";
import productivity from "@/src/assets/icons/productivity.svg";
import sleep from "@/src/assets/icons/sleep.svg";
import jazz from "@/src/assets/icons/jazz.svg";
import chill from "@/src/assets/icons/chill.svg";
import silent from "@/src/assets/icons/silent.svg";
import loud from "@/src/assets/icons/loud.svg";
import rain from "@/src/assets/icons/rain.svg";
import traffic from "@/src/assets/icons/traffic.svg";
import dark from "@/src/assets/imgs/16.jpg";
import light from "@/src/assets/imgs/17.png";
import start from "@/src/assets/icons/start.svg";
import timer from "@/src/assets/icons/timer.svg";
import note from "@/src/assets/icons/note.svg";

function Control() {
  // Control Menu
  const [mode, setMode] = useState("hidden");
  const [templates, setTemplates] = useState("hidden");
  const [more, setMore] = useState("hidden");

  const handleMode = () => {
    mode == "hidden" ? setMode("block") : setMode("hidden");
  };

  const handleTemplates = () => {
    templates == "hidden" ? setTemplates("block") : setTemplates("hidden");
  };

  const handleMore = () => {
    more == "hidden" ? setMore("block") : setMore("hidden");
  };

  const handleOutsideClick = () => {
    // Update state to hide the element
    setMode("hidden");
    setTemplates("hidden");
    setMore("hidden");
  };

  // Total Volume
  const [volume, setVolume] = useState(0.5);
  const handleVolume = (event) => {
    setVolume(parseFloat(event.target.value));
  };

  // Sound and active Mood
  const [sleepClick, { stop }] = useSound("/sound/chill-1.mp3", { volume });
  const [jazzClick, { stopJazz }] = useSound("/sound/chill-1.mp3", { volume });
  const [chillClick, { stopChill }] = useSound("/sound/chill-1.mp3", {
    volume,
  });

  const [backgroundStyle, setBackgroundStyle] = useState({
    backgroundColor: "white", // Default background color
  });

  const [tagId, setTagId] = useState(null);

  const idCurrent = useRef();

  const handleClickSleep = (e) => {
    const id = e.currentTarget.id;
    setTagId(id);

    tagId && console.log(tagId);

    if (tagId !== null) {
      var element = document.getElementById(tagId);
      console.log(element.id);

      if (element.id === tagId) {
        (element.style.backgroundColor = "aqua") && sleepClick();
      } else if (element.id !== tagId) {
        (element.style.backgroundColor = "white") && stop();
      }
    }
  };

  useEffect(() => {
    // tagId !== "" ? handleClickSleep : null;
  });

  const handleClickJazz = (e) => {
    const id = e.currentTarget.id;
    setTagId(id);

    tagId && console.log(tagId);

    if (tagId !== null) {
      var element = document.getElementById(tagId);
      console.log(element.id);

      if (element.id === tagId) {
        (element.style.backgroundColor = "aqua") && sleepClick();
      } else if (element.id !== tagId) {
        (element.style.backgroundColor = "white") && stop();
      }
    }
  };

  const handleClickChill = (e) => {
    const id = e.currentTarget.id;
    setTagId(id);

    tagId && console.log(tagId);

    if (tagId !== null) {
      var element = document.getElementById(tagId);
      console.log(element.id);

      if (element.id === tagId) {
        (element.style.backgroundColor = "aqua") && sleepClick();
      } else if (element.id !== tagId) {
        (element.style.backgroundColor = "white") && stop();
      }
    }
  };

  // Rain Volume
  // const [volume, setVolume] = useState(0.5);
  // const handleVolume = (e) => {
  //   setVolume(parseFloat(e.target.value));
  // };

  // Traffic Volume
  const [volumeTraffic, setVolumeTraffic] = useState(0.5);
  const handleVolumeTraffic = (e) => {
    setVolumeTraffic(parseFloat(e.target.value));
  };

  // Background Noise
  const [rainClick, { stopRain }] = useSound("/sound/rain.mp3", { volume });
  const [trafficClick, { stopTraffic }] = useSound("/sound/car.mp3", {
    volumeTraffic,
  });

  const handleClickRain = () => {
    rainClick();
  };

  const handleClickTraffic = () => {
    trafficClick();
  };

  // Change Templates

  const [imgTemp, setImgTemp] = useState();
  const [imgBody, setImgBody] = useState(
    "http://localhost:3000/_next/static/media/16.cd0d44ee.jpg"
  );

  const getPath = (e) => {
    e.preventDefault();
    setImgTemp(e.target.src);
  };

  if (typeof document !== "undefined") {
    // will run in client's browser only
    imgTemp
      ? (document.body.style.backgroundImage = "url('" + imgTemp + "')")
      : (document.body.style.backgroundImage = "url('" + imgBody + "')");
  }

  // Popup Start Session
  const [showStart, setShowStart] = useState(false);

  const handlePopup = () => {
    setShowStart(!showStart);
  };

  return (
    <div className="bg-[#d9d9d978] w-[100px] h-[360px] rounded-full absolute right-[100px] top-[200px]">
      <div
        className="h-[120px] border-b-[1px] border-[black] relative cursor-pointer"
        onClick={() => handleMode()}
      >
        <Image
          src={modeImg}
          alt="mode"
          className="absolute top-[31.2%] right-[27%]"
        />
        <ClickOutsideWrapper onClickOutside={handleOutsideClick}>
          <div className={mode}>
            <div className="bg-[black] w-[240px] h-[120px] rounded-tr-[50px] absolute right-[0] z-[-1]"></div>
            <div className="bg-[black] text-white w-[380px] h-[390px] p-6 rounded-xl absolute right-[150px] cursor-default">
              <div className="flex-col flex">
                <span className="font-bold text-[22px] mb-4">MOOD</span>
                <div className="flex justify-between">
                  <div
                    className="flex flex-col items-center w-[90px] text-black py-3 px-4 rounded-[10px] cursor-pointer"
                    style={backgroundStyle}
                    id="sleep"
                    onClick={handleClickSleep}
                  >
                    <Image src={sleep} alt="sleep" className="" />
                    <span className="font-bold text-[18px] ">Sleepy</span>
                  </div>
                  <div
                    className="flex flex-col items-center w-[90px] bg-white text-black py-3 px-4 rounded-[10px] cursor-pointer"
                    style={backgroundStyle}
                    id="jazz"
                    onClick={handleClickJazz}
                  >
                    <Image src={jazz} alt="jazz" className="" />
                    <span className="font-bold text-[18px] ">Jazzy</span>
                  </div>
                  <div
                    className="flex flex-col items-center w-[90px] bg-white text-black py-3 px-4 rounded-[10px] cursor-pointer"
                    style={backgroundStyle}
                    id="chill"
                    onClick={handleClickChill}
                  >
                    <Image src={chill} alt="Chill" className="" />
                    <span className="font-bold text-[18px]">Chill</span>
                  </div>
                </div>
              </div>
              <div className="mt-[40px] flex items-center justify-center gap-3 ">
                <Image src={silent} alt="silent" className="cursor-pointer" />
                <input
                  type="range"
                  name=""
                  id="volume"
                  max="1"
                  min="0"
                  step="0.01"
                  value={volume}
                  onChange={handleVolume}
                  className="w-[75%]"
                />
                <Image src={loud} alt="loud" className="" />
              </div>
              <div className="text-white mt-8">
                <span className="font-bold text-[22px] ">BACKGROUND NOISE</span>
                <div className="flex items-center gap-4 mt-4">
                  <span className="font-semibold text-[18px] pr-[17px]">
                    Rain
                  </span>
                  <Image
                    src={rain}
                    alt="rain"
                    className="cursor-pointer"
                    onClick={() => {
                      handleClickRain();
                    }}
                  />
                  <input
                    type="range"
                    name=""
                    id="volume"
                    // max="1"
                    // min="0"
                    // step="0.01"
                    // value={volume}
                    // onChange={handleVolume}
                    className="w-[56%]"
                  />
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <span className="font-semibold text-[18px]">Traffic</span>
                  <Image
                    src={traffic}
                    alt="traffic"
                    className="cursor-pointer"
                    onClick={() => {
                      handleClickTraffic();
                    }}
                  />
                  <input
                    type="range"
                    name=""
                    id="volumeTraffic"
                    // max="1"
                    // min="0"
                    // step="0.01"
                    // value={volumeTraffic}
                    // onChange={handleVolume}
                    className="w-[56%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </ClickOutsideWrapper>
      </div>
      <div
        className="h-[120px] border-b-[1px] border-[black] relative cursor-pointer"
        onClick={() => handleTemplates()}
      >
        <Image
          src={templatesImg}
          alt="templates"
          className="absolute top-[31.2%] right-[27%]"
        />
        <ClickOutsideWrapper onClickOutside={handleOutsideClick}>
          <div className={templates}>
            <div className="bg-[black] w-[240px] h-[120px] absolute right-[0] z-[-1]"></div>

            <div className="bg-[black] text-white w-[380px] h-[390px] p-6 rounded-xl absolute top-[-130px] right-[150px] cursor-default">
              <div className="flex-col flex">
                <span className="font-bold text-[22px] mb-4">TEMPLATES</span>
                <div className="flex flex-col items-center justify-between gap-5">
                  <div className="flex items-center w-[245px] cursor-pointer">
                    <Image
                      src={dark}
                      alt="dark"
                      className="rounded-[10px]"
                      onClick={getPath}
                    />
                  </div>
                  <div className="flex items-center w-[245px] cursor-pointer">
                    <Image
                      src={light}
                      alt="light"
                      className="rounded-[10px]"
                      // onClick={() => {
                      //   getPath;
                      //   changeTemp();
                      // }}
                      onClick={getPath}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ClickOutsideWrapper>
      </div>
      <div
        className="h-[120px] relative cursor-pointer"
        onClick={() => handleMore()}
      >
        <Image
          src={productivity}
          alt="productivity"
          className="absolute top-[31.2%] right-[27%]"
        />
        <ClickOutsideWrapper onClickOutside={handleOutsideClick}>
          <div className={more}>
            <div className="bg-[black] w-[240px] h-[120px] rounded-br-[50px] absolute right-[0] z-[-1]"></div>

            <div className="bg-[black] text-white w-[380px] h-[350px] p-6 rounded-xl absolute top-[-230px] right-[150px] cursor-default">
              <div className="flex-col flex">
                <span className="font-bold text-[22px] mb-4">PRODUCTIVITY</span>
                <div className="flex flex-col justify-between gap-10">
                  <div
                    onClick={handlePopup}
                    className="flex items-center bg-[#848484] text-black py-3 px-4 rounded-[10px] gap-3 cursor-pointer"
                  >
                    <Image src={start} alt="start" className="" />
                    <span className="font-bold text-[18px] ">
                      Start Session
                    </span>
                  </div>
                  {/* <Link
                    href="/"
                    className="flex items-center bg-[#848484] text-black py-3 px-4 rounded-[10px] gap-3 cursor-pointer"
                  >
                    <Image src={timer} alt="timer" className="" />
                    <span className="font-bold text-[18px] ">
                      Timer and Tasks
                    </span>
                  </Link> */}
                  <Link
                    href="components/Notes"
                    className="flex items-center bg-[#848484] text-black py-3 px-4 rounded-[10px] gap-3 cursor-pointer"
                  >
                    <Image src={note} alt="note" className="" />
                    <span className="font-bold text-[18px] ">Notes</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ClickOutsideWrapper>
      </div>
      {showStart && <Start />}
    </div>
  );
}

export default Control;
