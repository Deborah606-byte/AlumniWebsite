import { useContext, createContext, useState } from "react";

const EventContext = createContext({});
export const useEventContext = () => useContext(EventContext);

export default function EventContextProvider({ children }) {
  const [events, setEvents] = useState([]);

  return (
    <EventContext.Provider value={{ events, setEvents }}>
      {children}
    </EventContext.Provider>
  );
}
