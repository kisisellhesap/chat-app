import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Main from "../components/Main";
import EmojiPicker from "emoji-picker-react";
const Chatpage = ({ room, setRoom }) => {
  const [text, setText] = useState("");
  const [emoji, setEmoji] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    const messagesCol = collection(db, "messages");

    setText("");
    setEmoji(false);
    await addDoc(messagesCol, {
      text,
      room,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photoURL: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });
  };

  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser.displayName}</p>
        <span>{room}</span>
        <button onClick={() => setRoom(null)}>Farklı Oda</button>
      </header>

      <Main room={room} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <div className="emoji">
          <EmojiPicker
            onEmojiClick={(e) => {
              setText(text + " " + e.emoji);
            }}
            open={emoji}
            className="c"
          />

          <button
            type="button"
            onClick={() => {
              setEmoji(!emoji);
            }}
          >
            😊
          </button>
        </div>
        <button> Gönder</button>
      </form>
    </div>
  );
};

export default Chatpage;
