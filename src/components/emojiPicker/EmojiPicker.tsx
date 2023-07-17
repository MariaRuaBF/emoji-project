import EmojiPickerContainer from "./EmojiPickerContainer";
import Emoji from "../../../public/emoji.svg";

import React, { forwardRef, useState, useEffect } from "react";
import { useRef } from "react";

export const EmojiPicker = (
  _: undefined,
  ref: React.MutableRefObject<HTMLInputElement | null>
) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClickOpen() {
    setIsOpen(!isOpen);
  }

  const containerRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    window.addEventListener("click", (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as HTMLElement)) {
        setIsOpen(false);
      }
    });
  }, []);

  return (
    <div className="items-center" ref={containerRef}>
      <button className="p-2" onClick={handleClickOpen}>
        <img className="h-8" src={Emoji} alt="Icono emoji" />
        {""}
      </button>
      {isOpen && <EmojiPickerContainer ref={ref} />}
    </div>
  );
};

const ForwardedEmojiPicker = forwardRef<HTMLInputElement | null>(EmojiPicker);

export default ForwardedEmojiPicker;
