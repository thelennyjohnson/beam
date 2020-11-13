import React from "react";
import Screenshot from "./assets/screenshot.png";
import Logo from "./assets/logo.svg";
import playstore from "./assets/playstore.svg";
import "./App.css";

function App() {
  // let slideIndex = 0;
  // showSlides();

  // function showSlides() {
  //   let i;
  //   let slides = document.getElementsByClassName("fades");
  //   let dots = document.getElementsByClassName("dot");
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   slideIndex++;
  //   if (slideIndex > slides.length) {
  //     slideIndex = 1;
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex - 1].style.display = "block";
  //   dots[slideIndex - 1].className += " active";
  //   setTimeout(showSlides, 2000);
  //   // Change image every 2 seconds
  // }

  return (
    <div className="App">
      <div className="nav">
        <img alt="Beam logo" src={Logo}></img>
        <p>
          <a href="https://www.notion.so/About-0b48a0611c3f486a9e0130fdd3b7d459">About 👋</a>
        </p>
      </div>

      <div className="header-container">
        <div className="grid-container">
          <div className="grid-1">
            <div className="grid-1-content">
              <div>
                <h1 class="text fade">
                  Send money to anyone with a phone number
                </h1>
                {/* <h1 class="text fade">
                  Withdraw money with the Beam app
                </h1>
                <h1 class="text fade">
                  Free app to app payments. ₦5 SMS fee for USSD.
                </h1> */}
              </div>

              <div className="button-container">
                <button className="cta">
                  <span>DOWNLOAD ON PLAYSTORE </span>
                  <span>
                    <img alt="playstore" src={playstore}></img>
                  </span>
                </button>
                <div className="dot-container">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid-2">
            <img alt="Mobile screenshot of Beam" src={Screenshot}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
