import React from 'react';
import { FriendInterface } from '../data';

export const calculateDebt = (friend: FriendInterface) => {
  switch (true) {
    case friend.balance < 0:
      return (
        <p className="red">
          You owe {friend.name} &#x24;{Math.abs(friend.balance)}
        </p>
      );
    case friend.balance > 0:
      return (
        <p className="green">
          {friend.name} owes you &#x24;{Math.abs(friend.balance)}
        </p>
      );
    case friend.balance === 0:
      return <p>You and {friend.name} are even</p>;
    default:
      return null;
  }
};
