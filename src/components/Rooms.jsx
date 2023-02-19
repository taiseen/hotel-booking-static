import { useRoomContext } from '../context/RoomContext';
import { Room } from '.';


const Rooms = () => {

  const { rooms } = useRoomContext();

  return (
    <section className='py-24'>

      <div className='container mx-auto lg:px-0'>

        {
          rooms.map(room =>
            <Room key={room.id} room={room} />
          )
        }
      </div>

    </section>
  );
};

export default Rooms;
