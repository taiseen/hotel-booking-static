import { useRoomContext } from '../context/RoomContext';

const Header = () => {

  const { price } = useRoomContext();
  console.log(price);

  return (
    <header className='bg-green-200 p-4 text-center text-2xl'>
      Header
    </header>
  );
};

export default Header;
