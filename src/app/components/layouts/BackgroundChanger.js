// components/BackgroundChanger.js
"use client";

import { useState } from "react";
import Image from "next/image";

import dark from "@/src/assets/icons/dark.svg";
import light from "@/src/assets/icons/light.svg";

// const BackgroundChanger = () => {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleChange = () => {
//     setIsChecked(!isChecked);
//   };

//   return (
//     <div>
//       <label className="switch" htmlFor="changeBackground">
//         <input
//           type="checkbox"
//           id="changeBackground"
//           checked={isChecked}
//           onChange={handleChange}
//         />
//         <span className="slider rounded-[999px]"></span>
//         <Image src={dark} alt="dark" className="dark" />
//         <Image src={light} alt="dark" className="light" />
//         <style jsx>{`
//           body {
//             background-image: url(${isChecked
//               ? "../assets/imgs/17.png"
//               : "../assets/imgs/16.jpg"});
//             background-size: cover;
//             background-repeat: no-repeat;
//             height: 100vh;
//             margin: 0;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//           }
//         `}</style>
//       </label>
//     </div>
//   );
// };

// export default BackgroundChanger;

const BackgroundChanger = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="changeBackground"
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor="changeBackground">Change Background Image</label>
      <style jsx>{`
        body {
          background-image: url(${isChecked
            ? "../../assets/imgs/17.png"
            : "https://farm6.staticflickr.com/5595/14881585468_c74a12e7ed_b.jpg"});
          background-position: inherit;
          background-size: cover;
          background-repeat: no-repeat;
          height: 100vh;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default BackgroundChanger;
