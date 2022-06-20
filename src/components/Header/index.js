import React from "react";

function Header() {
  return (
    <header>
      <div>
        <h1>R.Prusinowski</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
          <li>
            <a href="/documents/Resume.pdf" target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
