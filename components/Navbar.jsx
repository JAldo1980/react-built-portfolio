import React from "react";

export default function Navbar() {
  function handleClick() {
    document.querySelector(".hamburger").classList.toggle("active");
    document.querySelector(".drop-down").classList.toggle("show");
  }

  function handleDropdownClick() {
    document.querySelector(".hamburger").classList.remove("active");
    document.querySelector(".drop-down").classList.remove("show");
  }

  function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <div className="nav-container">
      <a href="#home-anchor">
        <img
          src="public/james-alderman-logo-removebg-preview.png"
          className="logo-img"
          alt="Logo"
        />
      </a>

      <div className="mobile-nav">
        <div onClick={handleClick} className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      {/* mobile nav active */}
      <div className="drop-down">
        <a
          href="#about-scroll"
          onClick={() => {
            smoothScrollTo("about-scroll");
            handleDropdownClick();
          }}
        >
          About
        </a>
        <a
          href="#project-scroll"
          onClick={() => {
            smoothScrollTo("project-scroll");
            handleDropdownClick();
          }}
        >
          Work
        </a>
        <a
          href="#contact-scroll"
          onClick={() => {
            smoothScrollTo("contact-scroll");
            handleDropdownClick();
          }}
        >
          Contact
        </a>
      </div>
      <nav>
        <div className="desktop-nav">
          <div className="nav-links">
            <a
              href="#about-scroll"
              onClick={() => smoothScrollTo("about-scroll")}
            >
              About
            </a>
            <a
              href="#project-scroll"
              onClick={() => smoothScrollTo("project-scroll")}
            >
              Work
            </a>
            <a
              href="#contact-scroll"
              onClick={() => smoothScrollTo("contact-scroll")}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
