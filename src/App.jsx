import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { ROUTES } from "./data/constants/routes";
import AboutUs from "./pages/about-us";
import NotFound from "./pages/not-found";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Events from "./pages/events";
import EventDetails from "./pages/event-details";
import Opportunities from "./pages/opportunities";
import Stories from "./pages/stories";
import JobDetails from "./pages/job-details";
import RSVP from "./pages/rsvp";

const ParentRoute = () => <Outlet />;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.root} element={<AboutUs />} />
        <Route path={ROUTES.auth.root} element={<ParentRoute />}>
          <Route index element={<NotFound />} />
          <Route path={ROUTES.auth.login} element={<Login />} />
          <Route path={ROUTES.auth.signup} element={<SignUp />} />
        </Route>
        <Route path={ROUTES.home.root} element={<ParentRoute />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.home.dashboard} element={<Dashboard />} />
          <Route path={ROUTES.home.events} element={<Events />} />
          <Route path={ROUTES.home.eventDetails} element={<EventDetails />} />
        </Route>
        <Route path={ROUTES.opportunity} element={<Opportunities />} />
        <Route path={ROUTES.jobDetails} element={<JobDetails />} />
        <Route path={ROUTES.stories} element={<Stories />} />
        <Route path={ROUTES.rsvp} element={<RSVP />} />
        <Route path={ROUTES.notFound} element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
