import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { db } from "../firebase";
import Message from "./Message";
const Main = ({ room }) => {
  const [messages, setMessages] = useState([]);

  const lastMassage = useRef();
  useEffect(() => {
    const messagesCol = collection(db, "messages");

    const q = query(
      messagesCol,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );

    const unSub = onSnapshot(q, (data) => {
      const temp = [];
      data.docs.forEach((doc) => {
        temp.push(doc.data());
      });
      setMessages(temp);
    });

    return () => unSub();
  }, []);

  useEffect(() => {
    lastMassage.current.scrollIntoView();
  }, [messages]);

  return (
    <main>
      {messages.length === 0 ? (
        <p className="warn">mesaj yok</p>
      ) : (
        messages.map((data, i) => <Message key={i} data={data} />)
      )}

      <div ref={lastMassage} />
    </main>
  );
};

export default Main;
