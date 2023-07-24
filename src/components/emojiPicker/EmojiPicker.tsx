import EmojiPickerContainer from "./EmojiPickerContainer";
import { BsEmojiSmile, BsEmojiSmileUpsideDown } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";
import { PiSmileyFill, PiSmileyXEyesFill } from "react-icons/pi";

export const EmojiPicker = () => {
  const ref = useRef<HTMLInputElement | null>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    console.log("entre", isOpen);
    setIsOpen(!isOpen);
  };

  console.log("Desde el componente", isOpen);

  const FizzBuzz = () => {
    const res = [];
    for (let i = 1; i <= 30; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        res.push("BuzzFizz");
      } else if (i % 5 == 0) {
        res.push("Buzz");
      } else if (i % 3 == 0) {
        res.push("Fizz");
      } else res.push(i);
    }

    console.log(res);
  };

  const palindrome = (word: string) => {
    console.log(word === word.split("").reverse().join(""));
  };

  palindrome("121");

  const containerRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex items-center justify-between border-solid border-2 p-2 pl-0 gap-2 border-gray-400 rounded-lg w-1/5">
      <input className="w-full px-10 focus:outline-none " ref={ref} />
      <div className="items-center">
        <button className="p-2" onClick={handleClickOpen}>
          {isOpen ? (
            <PiSmileyFill
              id="hola1"
              size="24px"
              style={{ color: "rgb(236 72 153)" }}
            />
          ) : (
            <PiSmileyXEyesFill
              id="hola1"
              size="24px"
              style={{ color: "rgb(236 72 153)" }}
            />
          )}
        </button>
        {isOpen && <EmojiPickerContainer ref={ref} />}
      </div>
    </div>
  );
};
