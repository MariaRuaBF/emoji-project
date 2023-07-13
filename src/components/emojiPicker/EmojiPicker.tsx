import EmojiPickerContainer from "./EmojiPickerContainer";

import React, { ForwardedRef, forwardRef, useState, useEffect } from "react";
import { useRef } from "react";

export const EmojiPicker = (
  _: unknown,
  ref: ForwardedRef<HTMLInputElement | null>
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
    <div ref={containerRef} className="h-full">
      <button onClick={handleClickOpen}>🥳</button>
      {isOpen && <EmojiPickerContainer ref={ref} />}
    </div>
  );
};

const ForwardedEmojiPicker = forwardRef<HTMLInputElement | null>(EmojiPicker);

export default ForwardedEmojiPicker;
