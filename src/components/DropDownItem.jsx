import dropdownClose from "../assets/images/dropdown-close.png";
import dropdownOpen from "../assets/images/dropdown-open.png";

import * as React from "react";

function DropDownItem({ title, content }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-title" onClick={handleOpen}>
        <h2>{title}</h2>
        {open ? (
          <img src={dropdownClose} alt="Flèche Dropdown Fermé" />
        ) : (
          <img src={dropdownOpen} alt="Flèche Dropdown Ouvert" />
        )}
      </div>

      <div className="dropdown-content">
        {open ? <span> {content}</span> : null}
      </div>
    </div>
  );
}

export default DropDownItem;
