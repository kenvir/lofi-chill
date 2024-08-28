"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import dark from "@/src/assets/icons/dark.svg";
import light from "@/src/assets/icons/light.svg";

function Header() {
  const [checkedInput, setCheckedInput] = useState(false);

  console.log(!checkedInput);

  // !checkedInput
  //   ? (document.body.style.backgroundImage =
  //       "url(http://localhost:3000/_next/static/media/16.cd0d44ee.jpg)")
  //   : (document.body.style.backgroundImage =
  //       "url(http://localhost:3000/_next/static/media/17.8c484fc2.png)");

  const handleCheck = () => {
    !checkedInput
      ? (document.body.style.backgroundImage =
          "url(http://localhost:3000/_next/static/media/17.8c484fc2.png)")
      : (document.body.style.backgroundImage =
          "url(http://localhost:3000/_next/static/media/16.cd0d44ee.jpg)");
  };

  return (
    <header className="flex justify-between items-center px-16 pt-3">
      <Link href="/">
        <Image
          src="https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
          alt={"logo"}
          width="0"
          height="0"
          sizes="100vw"
          className="w-[55px] h-[55px] rounded-[10px] cursor-pointer"
          priority
        />{" "}
      </Link>
      <div className="flex items-center gap-10">
        <div className="flex gap-4">
          <Link
            href="/SignIn"
            className="border-[1px] rounded-md bg-[#b7b7b75c] px-3 py-2 text-white text-[14px] font-bold hover:bg-[#a4a4a4bf] transition duration-200 ease-out hover:ease-in"
          >
            Sign In
          </Link>
          <Link
            href="/SignUp"
            className="border-[1px] rounded-md bg-[#b7b7b75c] px-3 py-2 text-white text-[14px] font-bold hover:bg-[#a4a4a4bf] transition duration-200 ease-out hover:ease-in"
          >
            Sign Up
          </Link>
        </div>
        <label className="switch">
          <input type="checkbox" onClick={handleCheck} />
          {console.log(checkedInput)}
          <span className="slider rounded-[999px]"></span>
          <Image src={dark} alt="dark" className="dark" />
          <Image src={light} alt="light" className="light" />
        </label>
      </div>
    </header>
  );
}

export default Header;
