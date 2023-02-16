import { createContext, useContext, useState } from "react";
import { roomData } from "../db/data";

const RoomInfo = createContext();

export const RoomContext = ({ children }) => {

  const [rooms, setRooms] = useState(roomData);

  const shareWithChildren = {
    rooms,
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