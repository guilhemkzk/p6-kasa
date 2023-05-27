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
            <Route exact path="/" element={<Home />} />
            <Route exact path="/fiche/:name" element={<FicheLogement />} />
            <Route exact path="/apropos" element={<APropos />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
