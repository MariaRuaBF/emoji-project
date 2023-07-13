import { useState } from "react";
import { ChangeEvent } from "react";

import { data as emojiList } from "./data.json";
import EmojiSearch from "./EmojiSearch";

type EmojiType = {
  symbol: string;
  name: string;
  keywords: string;
};

const EmojiPickerContainer = () => {
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
  return (
    <div>
      <EmojiSearch onSearch={handleSearch} />
      <div>
        {emojis.map((emoji) => (
          <div key={emoji.symbol}>{emoji.symbol}</div>
        ))}
      </div>
    </div>
  );
};

export default EmojiPickerContainer;
