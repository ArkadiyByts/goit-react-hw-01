import { useState } from "react";
import Profile from "./profile/Profile";
import FriendList from "./friend-list/FriendList";
import TransactionHistory from "./transaction-history/TransactionHistory";
import userData from "./profile/userData.json";
import friends from "./friend-list/friend-list.json";
import transactions from './transaction-history/transaction-history.json'


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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </>
  );
}

export default App;
