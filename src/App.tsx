import EmojiPicker from "./components/emojiPicker/EmojiPicker";
import "./index.css";

import { useRef } from "react";

function App() {
  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex flex-col h-screen p-5 items-center">
      <h1 className="text-pink-500 text-5xl uppercase font-semibold text-center pb-10">
        Selector de emojis
      </h1>
      <div className="flex items-center justify-center border-solid border-2  gap-2 border-gray-400 rounded-lg">
        <input className=" p-4 px-10 focus:outline-none" ref={ref} />
        <EmojiPicker ref={ref} />
      </div>
    </div>
  );
}

export default App;
