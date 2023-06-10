import React, { FormEvent, useState } from 'react';
import Button from '../Button';
import { baseImageUrl } from './consts';
import { validateSubmit } from '../../utils/validateSubmit';
import { AddFriendProps } from './@types';
import { FriendInterface } from '../../data';

const AddFriend = ({ onAddFriend }: AddFriendProps) => {
  const [name, setName] = useState<string>('');
  const [image, setImage] = useState<string>(baseImageUrl);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isValid = validateSubmit(name, image);
    if (isValid) {
      const id = crypto.randomUUID();
      console.log(id);
      const newFriend: FriendInterface = {
        id,
        name,
        image: `${image}?=${id}`,
        balance: 0,
      };
      setName('');
      setImage(baseImageUrl);
      onAddFriend(newFriend);
    }
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌄 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button onClick={() => console.log('placeholder function')} text="Add" />
    </form>
  );
};

export default AddFriend;
