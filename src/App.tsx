import React from 'react';
import { FriendsList } from './components/FriendsList';
import { initialFriends } from './data';
import AddFriend from './components/AddFriend';
import Button from './components/Button';
import SplitBill from './components/SplitBill';

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        {' '}
        <FriendsList friends={initialFriends} />
        <AddFriend />
        <Button text="Add friend" />
      </div>
      <SplitBill />
    </div>
  );
}

export default App;
