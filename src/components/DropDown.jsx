import { useState, useRef } from "react";
import dropdownOpen from "../assets/images/dropdown-arrow.png";

function useFirstRender() {
  const ref = useRef(true);
  const firstRender = ref.current;
  ref.current = false;
  return firstRender;
}

function DropDown({ title, content }) {
  const [open, setOpen] = useState(false);
  const firstRender = useFirstRender();

  const handleOpen = () => {
    setOpen(!open);
  };

  const getArrowClasses = () => {
    if (firstRender) {
      return open ? "animate-arrow-open" : null;
    } else {
      return open ? "animate-arrow-open" : "animate-arrow-close";
    }
  };
  return (
    <div className="dropdown">
      <div className="dropdown-title" onClick={handleOpen}>
        <div className="dropdown-title-container">
          <h2>{title}</h2>

          <img
            src={dropdownOpen}
            alt="Flèche Dropdown Flèche"
            className={`dropdown-arrow ${getArrowClasses()}`}
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
            {content}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default DropDown;
