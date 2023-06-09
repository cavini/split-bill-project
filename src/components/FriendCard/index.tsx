import React from 'react';
import { FriendProps } from './@types';
import { calculateDebt } from '../../utils/calculateDebt';
import Button from '../Button';

export const FriendCard = ({ friend }: FriendProps) => {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {calculateDebt(friend)}
      <Button text="Select" />
    </li>
  );
};
