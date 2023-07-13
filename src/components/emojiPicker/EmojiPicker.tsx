import EmojiPickerContainer from "./EmojiPickerContainer";

import { forwardRef, useState } from "react";

interface EmojiPickerProps {
  name: string;
}

export const EmojiPicker = (
  { name }: EmojiPickerProps,
  ref: ForwardedRef<HTMLInputElement | null>
) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClickOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      {name}
      <button onClick={handleClickOpen}>🥳</button>
      {isOpen ? <EmojiPickerContainer /> : "No abierto"}
    </div>
  );
};

const ForwardedEmojiPicker = forwardRef<HTMLInputElement | null>(EmojiPicker);

export default ForwardedEmojiPicker;
