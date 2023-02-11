import { createContext, useContext, useEffect, useState } from "react";

const RoomInfo = createContext();

export const RoomContext = ({ children }) => {

  const [price, setPrice] = useState(1500);

  // return all properties...
  // useEffect(() => {
  //   const allProperty = houses.map(house => house.type);
  //   const uniqueProperties = ['Property (any)', ...new Set(allProperty)];
  //   setProperties(uniqueProperties);
  // }, []);

  const shareWithChildren = {
    price,
    setPrice,
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