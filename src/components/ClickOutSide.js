// components/ClickOutsideWrapper.js
import { useEffect } from "react";

const ClickOutsideWrapper = ({ children, onClickOutside }) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".your-element-class")) {
        onClickOutside();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClickOutside]);

  return <div>{children}</div>;
};

export default ClickOutsideWrapper;
