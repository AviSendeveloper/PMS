import React, { useEffect } from "react";

const useClickOutside = (elRef, callback) => {
  useEffect(() => {
    const clickOutside = (event) => {
      if (elRef.current && !elRef.current.contains(event.target)) {
        console.log("click outside");

        callback();
      }
    };

    document.addEventListener("mousedown", clickOutside);

    () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [elRef, callback]);
};

export default useClickOutside;
