import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./pages/index";
import AboutUs from "./pages/about-us";
import Auth from "./pages/auth";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.base} element={<AboutUs />} />
        <Route path={ROUTES.auth} element={<Auth />}>
          <Route path={ROUTES.login} element={<AboutUs />} />
          <Route path={ROUTES.signup} element={<AboutUs />} />
        </Route>
        <Route path={ROUTES.notFound} element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
