import { ChangeEvent } from "react";

interface EmojiSearchProps {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const EmojiSearch = ({ onSearch }: EmojiSearchProps) => {
  return (
    <input
      className="relative inline-flex p-2 rounded-md bg-white"
      onChange={onSearch}
      placeholder="Busque aquí"
    />
  );
};

export default EmojiSearch;
