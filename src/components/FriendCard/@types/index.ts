import { FriendInterface } from '../../../data';

export interface FriendProps {
  friend: FriendInterface;
  onSelectFriend: (friend: FriendInterface) => void;
  selectedFriend: FriendInterface | null;
}
