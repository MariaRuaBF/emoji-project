import { useState, forwardRef, ForwardedRef } from "react";
import { ChangeEvent } from "react";

import { data as emojiList } from "./data.json";
import EmojiSearch from "./EmojiSearch";

import { EmojiType } from "../../utils/types/EmojiType";
import EmojiButton from "./EmojiButton";

export const EmojiPickerContainer = (
  _: undefined,
  ref: React.MutableRefObject<HTMLInputElement | null>
) => {
  const [emojis, setEmojis] = useState<EmojiType[]>(emojiList);

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const query: string = e.target.value.toLowerCase();
    if (query) {
      const search = emojiList.filter((emoji) => {
        return (
          emoji.name.toLowerCase().includes(query) ||
          emoji.keywords.toLowerCase().includes(query)
        );
      });
      setEmojis(search);
    } else {
      setEmojis(emojiList);
    }
  }

  function handleOnClickEmoji(emoji: EmojiType) {
    const cursorPosition = ref.current?.selectionStart;
    const text = ref.current?.value;
    const prev = text && cursorPosition ? text.slice(0, cursorPosition) : "";
    const next = text && cursorPosition ? text.slice(cursorPosition) : "";

    ref.current && (ref.current.value = prev + emoji.symbol + next);
    ref.current &&
      (ref.current.selectionStart =
        (cursorPosition ?? 0) + emoji.symbol.length);
    ref.current &&
      (ref.current.selectionEnd = (cursorPosition ?? 0) + emoji.symbol.length);
    ref.current && ref.current.focus();
  }
  return (
    <div className="absolute w-96 h-80 border-solid border-2 border-white bg-black opacity-75 flex flex-col p-4 box-border rounded-lg shadow-xl gap-4 ">
      <EmojiSearch onSearch={handleSearch} />
      <div className="text-white uppercase">Frequently used</div>
      <div className=" flex gap-0.5 flex-wrap">
        {emojis.map((emoji) => (
          <EmojiButton
            key={emoji.symbol}
            emoji={emoji}
            onClick={handleOnClickEmoji}
          />
        ))}
      </div>
    </div>
  );
};

const ForwardedEmojiPickerContainer = forwardRef<HTMLInputElement | null>(
  EmojiPickerContainer
);

export default ForwardedEmojiPickerContainer;
