import { useState, forwardRef } from "react";
import { ChangeEvent } from "react";

import { data as emojiList } from "./data.json";
import EmojiSearch from "./EmojiSearch";

import { EmojiType } from "../../utils/types/EmojiType";
import EmojiButton from "./EmojiButton";

const EmojiPickerContainer = forwardRef<HTMLInputElement>((_, ref) => {
  const [emojis, setEmojis] = useState<EmojiType[]>(emojiList);
  const [frequentlyEmojis, setFrequentlyEmojis] = useState<EmojiType[]>([]);

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
    if (ref && typeof ref !== "function" && ref.current) {
      const cursorPosition = ref.current.selectionStart || 0;
      const text = ref.current.value;
      const prev = text?.slice(0, cursorPosition);
      const next = text?.slice(cursorPosition);
      ref.current.value = prev + emoji.symbol + next;
      ref.current.selectionStart = cursorPosition + emoji.symbol.length;
      ref.current.selectionEnd = cursorPosition + emoji.symbol.length;
      ref.current.focus();
      if (!frequentlyEmojis.includes(emoji)) {
        setFrequentlyEmojis([...frequentlyEmojis, emoji]);
      }
    }
  }

  return (
    <div className="absolute w-96 h-80 border-solid border-2 border-white bg-black opacity-75 flex flex-col p-4 box-border rounded-lg shadow-xl gap-4 ">
      <EmojiSearch onSearch={handleSearch} />
      <div className="text-white uppercase flex flex-col">
        <span>Frequently used</span>
        <div className="flex gap-0.5 flex-wrap">
          {frequentlyEmojis.map((emoji) => (
            <EmojiButton
              key={emoji.symbol}
              emoji={emoji}
              onClick={handleOnClickEmoji}
            />
          ))}
        </div>
      </div>
      <div className="flex gap-0.5 flex-wrap">
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
});

export default EmojiPickerContainer;
