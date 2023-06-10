import React, { useState } from 'react';
import { FriendsList } from './components/FriendsList';
import { FriendInterface, initialFriends } from './data';
import AddFriend from './components/AddFriend';
import Button from './components/Button';
import SplitBill from './components/SplitBill';

function App() {
  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);
  const [friends, setFriends] = useState<FriendInterface[]>(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState<null | FriendInterface>(
    null
  );
  const handleshowAddFriend = () => {
    setShowAddFriend(!showAddFriend);
  };
  const handleAddFriend = (friend: FriendInterface) => {
    setFriends((friends) => [...friends, friend]);
  };

  const handleSelectFriend = (friend: FriendInterface) => {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  };

  const handleSplitBill = (value: number) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? {
              ...friend,
              balance: friend.balance + value,
            }
          : friend
      )
    );

    setSelectedFriend(null);
  };
  return (
    <div className="app">
      <div className="sidebar">
        {' '}
        <FriendsList
          friends={friends}
          onSelectFriend={handleSelectFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <AddFriend onAddFriend={handleAddFriend} />}
        <Button
          onClick={handleshowAddFriend}
          text={showAddFriend ? 'Close' : 'Add'}
        />
      </div>
      {selectedFriend && (
        <SplitBill
          onSplitBill={handleSplitBill}
          selectedFriend={selectedFriend}
        />
      )}
    </div>
  );
}

export default App;
