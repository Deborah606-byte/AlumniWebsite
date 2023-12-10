import EventDetail from "../components/event-detail";
import EventFooter from "../components/footer";
import Header from "../components/header";
import EventNavigation from "../components/navigation";

export default function EventDetailsComponent() {
  return (
    <>
      <Header />
      <EventDetail />
      <EventNavigation />
      <EventFooter />
    </>
  );
}
