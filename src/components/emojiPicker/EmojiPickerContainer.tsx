import { useState, forwardRef, ForwardedRef } from "react";
import { ChangeEvent } from "react";

import { data as emojiList } from "./data.json";
import EmojiSearch from "./EmojiSearch";

import { EmojiType } from "../../utils/types/EmojiType";
import EmojiButton from "./EmojiButton";

export const EmojiPickerContainer = (
  props: any,
  ref: ForwardedRef<HTMLInputElement | null>
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
    const cursorPosition: number | null = ref.current.selectionStart;
    const text: string | null = ref.current.value;
    const prev: string = text?.slice(0, cursorPosition);
    const next: string = text?.slice(cursorPosition);
    ref.current.value = prev + emoji.symbol + next;
    ref.current.selectionStart = cursorPosition + emoji.symbol.length;
    ref.current.selectionEnd = cursorPosition + emoji.symbol.length;
    ref.current.focus();
  }
  return (
    <div className="absolute w-96 h-80 border-solid border-2 border-white bg-[#222] flex flex-col p-4 box-border rounded-lg shadow-xl gap-4">
      <EmojiSearch className="relative" onSearch={handleSearch} />
      <div className=" flex gap-2 flex-wrap">
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
