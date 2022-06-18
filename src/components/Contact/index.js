import React from "react";

function Contact() {
  return (
    <section id="contact-me" class="contact-me">
      <div class="section-name">
        <h3>Contact Me</h3>
      </div>
      <nav>
        <ul>
          <li>
            <a href="tel:+1952.865.0844">952.865.0844</a>
          </li>
          <li>
            <a href="mailto:bobpruz@gmail.com">Roberts Email</a>
          </li>
          <li>
            <a href="http://github.com/bobpruz" target="_blank" rel="noreferrer">GitHub</a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/18181340/bobpruz" target="_blank" rel="noreferrer">
              Stack Overflow
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Contact;
