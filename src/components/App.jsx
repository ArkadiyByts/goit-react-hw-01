import { useState } from "react";
import Profile from "./profile/Profile";
import FriendList from "./friend-list/FriendList";
import TransactionHistory from "./transaction-history/TransactionHistory";
import userData from "./profile/userData.json";
import "./App.css";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList />
      <TransactionHistory />
    </>
  );
}

export default App;
