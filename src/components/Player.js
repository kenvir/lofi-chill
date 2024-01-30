"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSound } from "use-sound";

import prev from "@/src/assets/icons/prev.svg";
import next from "@/src/assets/icons/next.svg";
import play from "@/src/assets/icons/play.svg";
import pauseImg from "@/src/assets/icons/pause.svg";

function Player() {
  // Sound
  const [volume, setVolume] = useState(0.5);
  const [chillClick, { pause }] = useSound("/sound/chill-1.mp3", { volume });

  const handleClickChill = () => {
    chillClick();
  };

  // Change state
  const [img, setImg] = useState(pauseImg);

  const handleChange = () => {  
    if (img === pauseImg) {
      setImg(play);
      handleClickChill();
    } else {
      setImg(pauseImg);
      pause();
    }
  };

  return (
    <div className="flex items-center justify-center w-full relative gap-14 pt-[450px]">
      <Image src={prev} alt="prev" className="cursor-pointer" />
      <Image
        src={img}
        alt="play"
        id="play"
        className="w-[85px] h-[85px] border-[1px] rounded-full p-4 text-[24px] cursor-pointer hover:bg-[#9d9d9d66]"
        onClick={handleChange}
      />
      <Image
        src={pause}
        alt="pause"
        className="hidden w-[85px] h-[85px] border-[1px] rounded-full p-4 text-[24px] cursor-pointer hover:bg-[#9d9d9d66]"
      />
      <Image src={next} alt="next" className="cursor-pointer" />
    </div>
  );
}

export default Player;
