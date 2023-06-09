import React from 'react';
import { FriendsListProps } from './@types';
import { FriendCard } from './FriendCard';

export const FriendsList = ({ friends }: FriendsListProps) => {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendCard friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};
