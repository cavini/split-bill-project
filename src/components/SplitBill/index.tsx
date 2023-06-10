import React, { FormEvent, useState } from 'react';
import Button from '../Button';
import { SplitBillProps } from './@types';
import { validateSubmit } from '../../utils/validateSubmit';

const SplitBill = ({ selectedFriend, onSplitBill }: SplitBillProps) => {
  const [bill, setBill] = useState<number>(0);
  const [paidByUser, setPaidByUser] = useState<number>(0);
  const paidByFriend = bill ? bill - paidByUser : 0;
  const [whoIsPaying, setWhoIsPaying] = useState<string>('user');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const isValid = validateSubmit(bill, paidByUser);

    if (isValid) {
      onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
    }
  };
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        type="number"
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
        type="number"
      />

      <label>👫 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤑 Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
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
