import React from 'react';
import Button from '../Button';
import { SplitBillProps } from './@types';

const SplitBill = ({ selectedFriend }: SplitBillProps) => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input type="text" />

      <label>🧍‍♀️ Your expense</label>
      <input type="text" />

      <label>👫 {selectedFriend.name}'s expense</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button
        onClick={() => console.log('placeholder function')}
        text="Split bill"
      />
    </form>
  );
};

export default SplitBill;
