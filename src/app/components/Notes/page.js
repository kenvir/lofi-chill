// components/AddNote.js
"use client";

import React, { useState } from "react";
import Link from "next/link";

function Notes({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onAdd(inputValue);
    setInputValue("");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        className="flex flex-col items-center bg-white h-[500px] w-[350px] rounded-md p-3"
        onSubmit={handleSubmit}
      >
        <h2 className="text-[28px] font-bold text-black">Add Note</h2>
        <textarea
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter your note..."
          className="h-full w-full p-3 mb-4 border-solid border-[1px] border-black focus-visible:border-none resize-none"
        />
        <div className="flex items-center justify-between w-full gap-3">
          <Link href="/">
            <button
              className="text-[22px] font-medium bg-[#d93a3a] hover:bg-[#ff0000] p-3 rounded-lg w-full"
              type="submit"
            >
              CANCEL
            </button>
          </Link>
          <button
            className="text-[22px] font-medium bg-[#d8ba20] hover:bg-[#ffd600] p-3 rounded-lg w-full"
            type="submit"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}

export default Notes;
