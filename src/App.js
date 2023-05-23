import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import FicheLogement from "./pages/FicheLogement";
import Error from "./pages/Error";
import APropos from "./pages/APropos";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fiche" element={<FicheLogement />} />
            <Route path="/error" element={<Error />} />
            <Route path="/apropos" element={<APropos />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
