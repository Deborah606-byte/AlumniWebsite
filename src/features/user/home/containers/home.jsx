import AluminiStory from "../components/alumini-story";
import Calendar from "../components/calendar";
import Carousel from "../components/carousel";
import HomeDashboard from "../components/dashboard";
import Header from "../components/header";
import UpcomingEvents from "../components/upcoming-events";
import useHomeLogic from "../logic-hooks/home";

export default function HomeComponent() {
  const { links, onDashboardClick } = useHomeLogic();
  return (
    <>
      <Header links={links} onDashboardClick={onDashboardClick} />
      <Carousel />
      <UpcomingEvents />
      <HomeDashboard />
      <Calendar />
      <AluminiStory />
    </>
  );
}
