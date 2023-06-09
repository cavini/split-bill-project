import React from 'react';
import { FriendsList } from './components/FriendsList';
import { initialFriends } from './data';

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        {' '}
        <FriendsList friends={initialFriends} />
      </div>
    </div>
  );
}

export default App;
