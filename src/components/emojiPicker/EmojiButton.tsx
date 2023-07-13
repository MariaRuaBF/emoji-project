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
      className="inline-block cursor-pointer hover:bg-white rounded-full"
      onClick={handleClick}
    >
      {emoji.symbol}
    </button>
  );
};

export default EmojiButton;
