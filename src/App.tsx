import React from 'react';
import { FriendsList } from './components/FriendsList';
import { initialFriends } from './data';
import AddFriend from './components/AddFriend';
import Button from './components/Button';

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        {' '}
        <FriendsList friends={initialFriends} />
        <AddFriend />
        <Button text="Add friend" />
      </div>
    </div>
  );
}

export default App;
