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
                 <h4>Run Buddy</h4>
                 <p>HTML/CSS</p>
                </div>
              <a href="https://bobpruz.github.io/runbuddy/index.html">
                <img
                  src={require('../../images/work1.jpg')}
                  alt="Run Buddy Website Screenshot"
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
                  src="./assets/images/horiseon.jpg"
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
                  src="./assets/images/project1.jpg"
                  alt="Get Your Day Started Right Website Screenshot"
                />
              </div>
            </a>
            <a href="https://bobpruz.github.io/runbuddy/index.html">
              <div class="work-cards">
                <div class="language-small">
                  <h4>Run Buddy</h4>
                 <p>HTML/CSS</p>
                </div>
                <img
                  src="./assets/images/work1.jpg"
                  alt="Run Buddy Website Screenshot"
                />
              </div>
            </a>
            <a href="https://bobpruz.github.io/runbuddy/index.html">
              <div class="work-cards">
                <div class="language-small">
                  <h4>Run Buddy</h4>
                 <p>HTML/CSS</p>
                </div>
                <img
                  src="./assets/images/work1.jpg"
                  alt="Run Buddy Website Screenshot"
                />
              </div>
            </a>
          </div>
        </div>
      </section>
    )
}

export default Work;