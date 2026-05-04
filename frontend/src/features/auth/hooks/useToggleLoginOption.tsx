import { useState } from "react";

const useToggleLoginOption = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleLoginOption = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, toggleLoginOption };
};

export default useToggleLoginOption;
