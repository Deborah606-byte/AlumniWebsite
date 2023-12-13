import { useState, useEffect } from "react";
import { fetchEventsApiRequest } from "../../index/imports";

export default function useEventsLogic() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState("");

  const toggleDropDown = (id) =>
    id === selectedEventId ? setSelectedEventId("") : setSelectedEventId(id);

  useEffect(() => {
    const fetchEvents = async () => {
      if (isLoading) return;
      setIsLoading(true);

      const { error, data } = await fetchEventsApiRequest();

      setIsLoading(false);
      if (error) return alert(`Failed To Fetch Events \n${error}`);
      setEvents(data.events);
    };

    fetchEvents();
  }, []);

  return { isLoading, events, selectedEventId, toggleDropDown };
}
