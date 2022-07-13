import React from "react";

function Work() {
    return (
        <section id="work" class="work">
        <div class="section-name">
          <h3>My Work</h3>
        </div>
        <div class="work-grid">
  
          <div class="work1">
            <div class="work2">
              <div class="language-big">
                 <h4>Delicious Connection</h4>
                 <p>MERN</p>
                </div>
              <a href="https://delcon.herokuapp.com/">
                <img
                  src={require('../../images/delcon.jpg')}
                  alt="Delcon Website Screenshot"
                />
              </a>
            </div>
          </div>
  
  
          <div class="work-card">
            <a href="https://bobpruz.github.io/urban/Develop/index.html">
              <div class="work-cards">
                <div class="language-small">
                  <h4>Horiseon</h4>
                 <p>HTML/CSS</p>
                </div>
                <img
                  src={require('../../images/horiseon.jpg')}
                  alt="Horiseon Website Screenshot"
                />
              </div>
            </a>
            <a href="https://bobpruz.github.io/project1/index.html">
              <div class="work-cards">
                <div class="language-small">
                  <h4>GYDSR</h4>
                 <p>HTML/CSS/JS/JQUERY/APIs</p>
                </div>
                <img
                  src={require('../../images/project1.jpg')}
                  alt="Get Your Day Started Right Website Screenshot"
                />
              </div>
            </a>
            <a href="https://bobpruz.github.io/passgen/index.html">
              <div class="work-cards">
                <div class="language-small">
                  <h4>Password Generator</h4>
                 <p>HTML/CSS/Java Script</p>
                </div>
                <img
                  src={require('../../images/passgen.jpg')}
                  alt="Password Generator Website Screenshot"
                />
              </div>
            </a>
            <a href="https://bobpruz.github.io/weather-dashboard/index.html">
              <div class="work-cards">
                <div class="language-small">
                  <h4>Weather App</h4>
                 <p>HTML/CSS/JQUERY/Bootstrap/APIs</p>
                </div>
                <img
                  src={require('../../images/weather.jpg')}
                  alt="Weather App website Screenshot"
                />
              </div>
            </a>
          </div>
        </div>
      </section>
    )
}

export default Work;