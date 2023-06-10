import React from 'react';
import { FriendProps } from './@types';
import { calculateDebt } from '../../utils/calculateDebt';
import Button from '../Button';

export const FriendCard = ({
  friend,
  onSelectFriend,
  selectedFriend,
}: FriendProps) => {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {calculateDebt(friend)}
      <Button
        onClick={() => onSelectFriend(friend)}
        text={isSelected ? 'Close' : 'Select'}
      />
    </li>
  );
};
