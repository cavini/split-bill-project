import { FriendInterface } from '../../../data';

export interface AddFriendProps {
  onAddFriend: (friend: FriendInterface) => void;
}
