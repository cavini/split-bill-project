import React from 'react';
import { FriendsListProps } from './@types';
import { FriendCard } from '../FriendCard';

export const FriendsList = ({
  friends,
  onSelectFriend,
  selectedFriend,
}: FriendsListProps) => {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendCard
          selectedFriend={selectedFriend}
          friend={friend}
          key={friend.id}
          onSelectFriend={onSelectFriend}
        />
      ))}
    </ul>
  );
};
