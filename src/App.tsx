import React, { useState } from 'react';
import { FriendsList } from './components/FriendsList';
import { initialFriends } from './data';
import AddFriend from './components/AddFriend';
import Button from './components/Button';
import SplitBill from './components/SplitBill';

function App() {
  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);
  const handleshowAddFriend = () => {
    setShowAddFriend(!showAddFriend);
  };
  return (
    <div className="app">
      <div className="sidebar">
        {' '}
        <FriendsList friends={initialFriends} />
        {showAddFriend ? <AddFriend /> : <></>}
        <Button
          onClick={handleshowAddFriend}
          text={showAddFriend ? 'Close' : 'Add'}
        />
      </div>
      <SplitBill />
    </div>
  );
}

export default App;
