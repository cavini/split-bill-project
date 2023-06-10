import { FriendInterface } from '../../../data';

export interface SplitBillProps {
  selectedFriend: FriendInterface;
  onSplitBill: (value: number) => void;
}
