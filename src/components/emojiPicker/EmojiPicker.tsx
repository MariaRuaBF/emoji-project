import { EmojiPickerContainer } from "./EmojiPickerContainer";
import { useState, useEffect, useRef } from "react";
import { PiSmileyFill, PiSmileyXEyesFill } from "react-icons/pi";

export const EmojiPicker = () => {
  const ref = useRef<HTMLInputElement | null>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between border-solid border-2 p-2 pl-0 gap-2 border-gray-400 rounded-lg w-1/5">
      <input className="w-full px-10 focus:outline-none " ref={ref} />
      <div className="items-center">
        <button className="p-2" onClick={handleClickOpen}>
          {isOpen ? (
            <PiSmileyXEyesFill
              id="hola1"
              size="24px"
              style={{ color: "rgb(236 72 153)" }}
            />
          ) : (
            <PiSmileyFill
              id="hola1"
              size="24px"
              style={{ color: "rgb(236 72 153)" }}
            />
          )}
        </button>
        {isOpen && <EmojiPickerContainer setIsOpen={setIsOpen} ref={ref} />}
      </div>
    </div>
  );
};
