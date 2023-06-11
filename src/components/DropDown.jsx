import { useState } from "react";
import dropdownOpen from "../assets/images/dropdown-open.png";

let counter = 0;

function DropDownItem({ title, content }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    counter++;
  };

  return (
    <div className="dropdown">
      <div className="dropdown-title" onClick={handleOpen}>
        <div className="dropdown-title-container">
          <h2>{title}</h2>

          <img
            src={dropdownOpen}
            alt="Flèche Dropdown Flèche"
            className={
              open
                ? "dropdown-arrow animate-arrow-open"
                : counter > 0
                ? "dropdown-arrow  animate-arrow-close"
                : "dropdown-arrow"
            }
          />
        </div>
      </div>

      <div
        className={open ? "dropdown-content animate-open" : "dropdown-content"}
      >
        {open ? (
          <span
            className={
              open ? "dropdown-text animate-open-text" : "dropdown-text "
            }
          >
            {" "}
            {content}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default DropDownItem;
