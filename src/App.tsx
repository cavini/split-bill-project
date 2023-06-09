import React, { useState } from 'react';
import { FriendsList } from './components/FriendsList';
import { FriendInterface, initialFriends } from './data';
import AddFriend from './components/AddFriend';
import Button from './components/Button';
import SplitBill from './components/SplitBill';

function App() {
  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);
  const [friends, setFriends] = useState<FriendInterface[]>(initialFriends);
  const handleshowAddFriend = () => {
    setShowAddFriend(!showAddFriend);
  };
  const handleAddFriend = (friend: FriendInterface) => {
    setFriends((friends) => [...friends, friend]);
  };
  return (
    <div className="app">
      <div className="sidebar">
        {' '}
        <FriendsList friends={friends} />
        {showAddFriend && <AddFriend onAddFriend={handleAddFriend} />}
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
