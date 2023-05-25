import prevNav from "../assets/images/prev.png";
import nextNav from "../assets/images/next.png";

function NavButtons() {
  return (
    <div className="nav">
      <img src={prevNav} className="nav-prev" alt="Navigation précédent" />
      <img src={nextNav} className="nav-next" alt="Navigation suivant" />
    </div>
  );
}

export default NavButtons;
