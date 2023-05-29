import prevNav from "../assets/images/prev.png";

function PreviousBtn() {
  return (
    <div className="nav-btn">
      <img src={prevNav} className="nav-prev" alt="Navigation précédent" />
    </div>
  );
}

export default PreviousBtn;
