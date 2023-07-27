import { ChangeEvent } from "react";

interface EmojiSearchProps {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const EmojiSearch = ({ onSearch }: EmojiSearchProps) => {
  return (
    <div className="bg-black w-full">
      <input
        className="w-full inline-flex p-2 rounded-md bg-white"
        onChange={onSearch}
        placeholder="Busque aquí"
      />
    </div>
  );
};
export default EmojiSearch;
