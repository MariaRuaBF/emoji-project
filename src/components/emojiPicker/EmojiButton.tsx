import { EmojiType } from "../../utils/types/EmojiType";

interface EmojiButtonProps {
  emoji: EmojiType;
  onClick: (emoji: EmojiType) => void;
}

const EmojiButton = ({ emoji, onClick }: EmojiButtonProps) => {
  function handleClick() {
    onClick(emoji);
  }
  return (
    <button
      className="inline-block p-[2px] cursor-pointer  hover:bg-pink-500/75 rounded-md"
      onClick={handleClick}
    >
      {emoji.symbol}
    </button>
  );
};

export default EmojiButton;
