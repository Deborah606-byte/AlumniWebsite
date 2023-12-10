import AluminiEvents from "./alumini-events";
import EventFooter from "../components/footer";
import Header from "../components/header";
import Subscribe from "../components/subscribe";
import UpcomingEvent from "../components/upcoming-event";
import useEventsLogic from "../logic-hooks/events";

export default function EventComponent() {
  const { urls } = useEventsLogic();
  return (
    <>
      <Header urls={urls} />
      <UpcomingEvent />
      <AluminiEvents urls={urls} />
      <Subscribe />
      <EventFooter />
    </>
  );
}
