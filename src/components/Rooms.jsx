import { useRoomContext } from '../context/RoomContext';
import { Room } from '.';


const Rooms = () => {

  const { rooms } = useRoomContext();

  return (
    <section className='py-24'>

      <div className='container mx-auto lg:px-0'>

        <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0'>
          {
            rooms.map(room =>
              <Room key={room.id} room={room} />
            )
          }
        </div>
      </div>

    </section>
  );
};

export default Rooms;
