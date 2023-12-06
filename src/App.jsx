import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./pages/index";
import Auth from "./pages/auth";
import AboutUs from "./pages/about-us";
import NotFound from "./pages/not-found";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Home from "./pages/home";
import Dashboard from "./pages/home";
import Events from "./pages/home";
import EventDetails from "./pages/home";
import Opportunities from "./pages/home";
import Stories from "./pages/home";
import JobDetails from "./pages/home";
import RSVP from "./pages/home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.base} element={<AboutUs />} />
        <Route path={ROUTES.auth} element={<Auth />}>
          <Route path={ROUTES.login} element={<Login />} />
          <Route path={ROUTES.signup} element={<SignUp />} />
        </Route>
        <Route path={ROUTES.notFound} element={<NotFound />} />
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.dashboard} element={<Dashboard />} />
        <Route path={ROUTES.events} element={<Events />} />
        <Route path={ROUTES.eventDetails} element={<EventDetails />} />
        <Route path={ROUTES.opportunity} element={<Opportunities />} />
        <Route path={ROUTES.jobDetails} element={<JobDetails />} />
        <Route path={ROUTES.stories} element={<Stories />} />
        <Route path={ROUTES.rsvp} element={<RSVP />} />
      </Routes>
    </Router>
  );
};

export default App;
