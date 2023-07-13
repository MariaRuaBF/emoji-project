import EmojiPicker from "./components/emojiPicker/EmojiPicker";
import "./index.css";

import { useRef } from "react";

function App() {
  const ref = useRef<HTMLInputElement | null>(null);

  function handleClick() {
    ref.current?.focus();
  }

  return (
    <>
      <h1 className="text-pink-800 font-semibold">Selector de emojis</h1>
      <input ref={ref} />
      <button onClick={handleClick}>Da click</button>
      <EmojiPicker ref={ref} />
    </>
  );
}

export default App;
