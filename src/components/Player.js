"use client";

import prev from "@/src/assets/icons/prev.svg";
import next from "@/src/assets/icons/next.svg";
import play from "@/src/assets/icons/play.svg";
import pause from "@/src/assets/icons/pause.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
// import music from "@/src/API/music.json";
// import rain from "@/src/assets/music/rain.mp3";

function Player() {
  // const [play, setPlay] = useState("false");
  const [img, setImg] = useState(pause);
  // const [rain, setRain] = useState("false");

  const handleChange = () => {
    if (img === pause) {
      setImg(play);
    } else {
      setImg(pause);
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
