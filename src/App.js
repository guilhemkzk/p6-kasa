import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import FicheLogement from "./pages/FicheLogement";
import Error from "./pages/Error";
import APropos from "./pages/APropos";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/fiche/:name" element={<FicheLogement />} />
            <Route exact path="/apropos" element={<APropos />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
