import { EmojiType } from "../../utils/types/EmojiType";

interface EmojiButtonProps {
  emoji: EmojiType;
  onClick: (emoji) => void;
}

const EmojiButton = ({ emoji, onClick }: EmojiButtonProps) => {
  function handleClick() {
    onClick(emoji);
  }
  return <button onClick={handleClick}>{emoji.symbol}</button>;
};

export default EmojiButton;
