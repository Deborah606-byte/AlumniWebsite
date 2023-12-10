import AboutAlumini from "../component/about-alumini";
import AluminiGoals from "../component/alumini-goals";
import Header from "../component/header";
import HeroInfo from "../component/hero";
import UpcomingEvents from "../component/upcoming-events";
import Testimonials from "../component/testimonials";
import Speakers from "../component/speakers";
import Footer from "../component/footer";

export default function AboutUsComponent() {
  return (
    <>
      <Header />
      <HeroInfo />
      <AboutAlumini />
      <AluminiGoals />
      <UpcomingEvents />
      <Testimonials />
      <Speakers />
      <Footer />
    </>
  );
}
