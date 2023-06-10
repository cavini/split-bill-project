export interface FriendInterface {
  id: string;
  name: string;
  image: string;
  balance: number;
}

export const initialFriends: FriendInterface[] = [
  {
    id: 'fc1a1df5-63fc-47a5-9169-c9e5820a4bde',
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: '5afef2e7-97f3-475c-b204-4a7b95efbbde',
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: '39932b59-a8f8-437f-b8cd-c3a8acb162b9',
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];
