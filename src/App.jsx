import React, { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import RoomPage from "./pages/RoomPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Chatpage from "./pages/Chatpage";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsAuth(user);
    });
  }, []);

  return (
    <div className="app">
      {!isAuth ? (
        <LoginPage />
      ) : room ? (
        <Chatpage room={room} setRoom={setRoom} />
      ) : (
        <RoomPage setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;
