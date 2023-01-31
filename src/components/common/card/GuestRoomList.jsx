import styled from 'styled-components';
import GuestRoomItem from './GuestRoomItem';

import Image from '../../../assets/mocks/옥화당.png';

const ListWrapper = styled.ul``;

export default function GuestRoomList() {
  // TODO: Store 연동 후 mock data 지워야 함!
  const rooms = [
    {
      id: 1,
      name: '옥화당 1인실',
      standard: 1,
      maximum: 1,
      available: 3,
      price: 10000,
      // TODO: imageUrl mock 파일 말고 수정되어야 함
      imageUrl: Image,
    },
    {
      id: 2,
      name: '선화당 1인실',
      standard: 1,
      maximum: 1,
      available: 1,
      price: 10000,
      imageUrl: Image,
    },
    {
      id: 3,
      name: '옥화당 2인실',
      standard: 1,
      maximum: 2,
      available: 3,
      price: 20000,
      imageUrl: Image,
    },
  ];

  return (
    <ListWrapper>
      {rooms.map((room) => (
        <GuestRoomItem
          key={room.id}
          room={room}
        />
      ))}
    </ListWrapper>
  );
}
