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
          <Route exact path="/fiches/:id" element={<HousingPage />} />
          <Route exact path="/a-propos" element={<AboutPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </>
);

export default routes;
