import AluminiStory from "../components/alumini-story";
import Calendar from "../components/calendar";
import Carousel from "../components/carousel";
import HomeDashboard from "../components/dashboard";
import Header from "../components/header";
import UpcomingEvents from "../components/upcoming-events";

export default function HomeComponent() {
  return (
    <>
      <Header />
      <Carousel />
      <UpcomingEvents />
      <HomeDashboard />
      <Calendar />
      <AluminiStory />
    </>
  );
}
