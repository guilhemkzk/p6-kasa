import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import HousingPage from "./pages/HousingPage";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/fiches/:name" element={<HousingPage />} />
            <Route exact path="/apropos" element={<AboutPage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
