import React from "react";
import { auth } from "../firebase";

const Message = ({ data }) => {
  if (auth.currentUser.uid === data.author.id) {
    return <p className="msg-user"> {data.text}</p>;
  }
  return (
    <div className="msg-other">
      <div>
        <img src={data.author.photoURL} alt="img" />
        <span>{data.author.name}</span>
      </div>
      <p> {data.text}</p>
    </div>
  );
};

export default Message;
