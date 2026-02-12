import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="nav-container">

        <div className="logo">
          <div className="logo-icon">CT</div>
          <div className="logo-text">CodeTantra</div>
        </div>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#events">EVENTS</a></li>
          <li><a href="#" className="nav-cta">NEED FOR CODE 4.0</a></li>
        </ul>

        <div
          className={`menu-toggle ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
