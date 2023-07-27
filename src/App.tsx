import { EmojiPicker } from "./components/emojiPicker/EmojiPicker";
import "./index.css";

function App() {
  return (
    <div className="flex flex-col h-screen p-5 items-center">
      <h1 className="text-pink-500 text-5xl uppercase font-semibold text-center pb-10">
        Selector de emojis
      </h1>
      <EmojiPicker />
    </div>
  );
}

export default App;
