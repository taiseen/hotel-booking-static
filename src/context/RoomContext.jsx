import { createContext, useContext, useEffect, useState } from "react";
import { roomData } from "../db/data";

const RoomInfo = createContext();

export const RoomContext = ({ children }) => {

  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState('1 Adult');
  const [kids, setKids] = useState('0 Kid');
  const [total, setTotal] = useState(0);


  useEffect(() => {
    setTotal(+adults[0] + +kids[0]);
  });


  const handleCheck = (e) => {
    e.preventDefault();

    // filter rooms based on total persons...
    const filterRooms = roomData.filter(room => total <= room.maxPerson)
    setRooms(filterRooms); // refresh UI with new filtered rooms...

  }



  const shareWithChildren = {
    rooms,
    adults, setAdults,
    kids, setKids,
    handleCheck,
  };

  return (
    <RoomInfo.Provider value={shareWithChildren}>
      {
        children
      }
    </RoomInfo.Provider>
  )
}

export const useRoomContext = () => useContext(RoomInfo);