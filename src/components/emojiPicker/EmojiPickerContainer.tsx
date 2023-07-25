import { useState, forwardRef, useEffect, useMemo, useRef } from "react";
import { ChangeEvent } from "react";

import { data as emojiList } from "./data.json";
import EmojiSearch from "./EmojiSearch";

import { EmojiType } from "../../utils/types/EmojiType";
import EmojiButton from "./EmojiButton";

import { useOnClickOutside } from "../../hooks/useOnClickOuside";

interface EmojiPickerContainerProps {
  setIsOpen: (isOpen: boolean) => void;
}

export const EmojiPickerContainer = forwardRef<
  HTMLInputElement | null,
  EmojiPickerContainerProps
>(({ setIsOpen }, ref) => {
  const [emojis, setEmojis] = useState<EmojiType[]>(emojiList);
  const [frequentlyEmojis, setFrequentlyEmojis] = useState<EmojiType[]>([]);

  const clickOutsideHandler = () => {
    setIsOpen(false);
  };

  const containerRef = useRef<HTMLInputElement | null>(null);

  useOnClickOutside(containerRef, clickOutsideHandler);

  useEffect(() => {
    const frequentlyUsedEmojisString =
      localStorage.getItem("frequently emojis");
    const frequentlyUsedEmojis: EmojiType[] | null =
      frequentlyUsedEmojisString !== null
        ? (JSON.parse(frequentlyUsedEmojisString) as EmojiType[])
        : null;
    if (frequentlyUsedEmojis) {
      setFrequentlyEmojis(frequentlyUsedEmojis);
    }
    return;
  }, []);

  useEffect(() => {
    if (frequentlyEmojis.length !== 0) {
      localStorage.setItem(
        "frequently emojis",
        JSON.stringify(frequentlyEmojis)
      );
    }
  }, [frequentlyEmojis]);

  const categories = useMemo(() => {
    const array: string[] = [];
    emojiList.forEach((emoji: EmojiType) => {
      const { category } = emoji;
      if (!array.includes(category)) {
        array.push(category);
      }
    });
    return array;
  }, []);

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

  function emojiPerCategory(category: string) {
    return emojis.filter((emoji) => emoji.category == category);
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

      if (!frequentlyEmojis.some((item) => item.symbol == emoji.symbol)) {
        setFrequentlyEmojis([...frequentlyEmojis, emoji]);
      }
    }
  }

  return (
    <div
      className="absolute w-96 h-80 border-solid border-2 border-white bg-black opacity-75 flex flex-col p-4 box-border rounded-lg shadow-xl "
      ref={containerRef}
    >
      <EmojiSearch onSearch={handleSearch} />
      <div className="w-fit overflow-scroll py-2 scroll-smooth ">
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
        <div>
          {categories.map((category, index) => (
            <div key={index} className="my-2">
              <span className="text-white uppercase flex flex-col">
                {category}
              </span>
              <div className="flex gap-0.5 flex-wrap">
                {emojiPerCategory(category).map((emoji) => (
                  <EmojiButton
                    key={emoji.symbol}
                    emoji={emoji}
                    onClick={handleOnClickEmoji}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
