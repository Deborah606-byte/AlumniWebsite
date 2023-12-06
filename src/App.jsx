import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./pages/index";
import Auth from "./pages/auth";
import AboutUs from "./pages/about-us";
import NotFound from "./pages/not-found";
import Login from "./pages/login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.base} element={<AboutUs />} />
        <Route path={ROUTES.auth} element={<Auth />}>
          <Route path={ROUTES.login} element={<Login />} />
          <Route path={ROUTES.signup} element={<AboutUs />} />
        </Route>
        <Route path={ROUTES.notFound} element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
