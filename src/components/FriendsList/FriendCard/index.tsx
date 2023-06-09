import React from 'react';
import { FriendProps } from './@types';
import { calculateDebt } from '../../../utils/calculateDebt';

export const FriendCard = ({ friend }: FriendProps) => {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {calculateDebt(friend)}
      <button className="button">Select</button>
    </li>
  );
};
