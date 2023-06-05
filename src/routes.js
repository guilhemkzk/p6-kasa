import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import HousingPage from "./pages/HousingPage";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";

const routes = () => (
  <>
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/fiches/:name" element={<HousingPage />} />
          <Route exact path="/a-propos" element={<AboutPage />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </>
);

export default routes;
