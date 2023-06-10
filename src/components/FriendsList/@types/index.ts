import { FriendInterface } from '../../../data';

export interface FriendsListProps {
  friends: FriendInterface[];
  onSelectFriend: (friend: FriendInterface) => void;
  selectedFriend: FriendInterface | null;
}
