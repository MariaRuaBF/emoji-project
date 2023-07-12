import { ChangeEvent } from "react";

interface EmojiSearchProps {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const EmojiSearch = ({ onSearch }: EmojiSearchProps) => {
  return <input onChange={onSearch} placeholder="Busque aquí" />;
};

export default EmojiSearch;
