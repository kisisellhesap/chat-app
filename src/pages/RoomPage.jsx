import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

const RoomPage = ({ setRoom }) => {
  const handleClick = () => {
    signOut(auth);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const room = e.target[0].value.trim().toLowerCase();

    setRoom(room);
  };
  return (
    <form className="room-page small-c" onSubmit={handleSubmit}>
      <h1>Chat Odası</h1>
      <span>Hangi Odaya Gireceksiniz ? </span>
      <input type="text" placeholder="Bir oda ismi girin" />
      <button>Odaya Gir</button>
      <button type="button" onClick={handleClick}>
        Çıkış Yap
      </button>
    </form>
  );
};

export default RoomPage;
