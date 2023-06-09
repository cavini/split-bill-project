import React from 'react';
import Button from '../Button';

const AddFriend = () => {
  return (
    <form className="form-add-friend">
      <label>👫 Friend name</label>
      <input type="text" />

      <label>🌄 Image URL</label>
      <input type="text" />
      <Button onClick={() => console.log('placeholder function')} text="Add" />
    </form>
  );
};

export default AddFriend;
