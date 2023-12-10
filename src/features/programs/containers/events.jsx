import AluminiEvents from "../components/alumini-events";
import EventFooter from "../components/footer";
import Header from "../components/header";
import Subscribe from "../components/subscribe";
import UpcomingEvent from "../components/upcoming-event";

export default function EventComponent() {
  return (
    <>
      <Header />
      <UpcomingEvent />
      <AluminiEvents />
      <Subscribe />
      <EventFooter />
    </>
  );
}
