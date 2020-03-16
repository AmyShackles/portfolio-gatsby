import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import LeftArrow from "../../images/angle-double-left.svg"
import RightArrow from "../../images/angle-double-right.svg"
import SEO from "../../components/seo"
import "../../styles/style.css"

const CheckYourDigits = () => (
  <Layout>
    <SEO title="Contact" />
    <div role="navigation">
      <div class="content-nav">
        <ul>
          <li>
            <Link to="/projects/baseConverter">
              <img src={LeftArrow} alt="arrow left" />
            </Link>
          </li>
          <li>
            <div class="linkToProjects">
              <Link to="/projects"> Projects</Link>
            </div>
          </li>
          <li>
            <Link to="/projects/contractAlchemy">
              <img src={RightArrow} alt="arrow right" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <main role="main">
      <div className="content-holder two-navs">
        <div className="content-main content-left">
          <div className="left-inside">
            <h1 className="page-title">Check Your Digits</h1>
            <h2>
              Program parses the number entered and either returns the ISBN
              check digit or the checksum for the number provided, why or why
              not it is valid, and how many digits you passed in. If a 9 digit
              number is entered, the program will compute the check digit for
              ISBN-10. If 10 digits are entered, it will return whether or not
              the number is a valid ISBN-10 number. If 12 digits are entered, it
              will return the check digit for ISBN-13. If 13 numbers are
              entered, it will return whethre or not the number is a valid
              ISBN-13 number.
            </h2>
            <div className="project-details">
              <h2>Tech</h2>
              <ul>
                <li>
                  <h3>Language : C++</h3>
                </li>
              </ul>
              <div className="buttons">
                <a
                  href="https://repl.it/@AmyShackles/CheckYourDigits"
                  aria-label="link to source code for Check Your Digits on repl.it"
                  type="button"
                  role="button"
                  className="button"
                >
                  <span>Source Code</span>
                </a>
                <a
                  href="https://repl.it/@AmyShackles/CheckYourDigits?lite=1&amp;outputonly=1"
                  aria-label="link to program"
                  type="button"
                  role="button"
                  className="button responsive"
                >
                  <span>Program</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="content-main content-right">
          <div className="item full-height">
            <iframe
              title="CheckYourDigits"
              className="scale-with-grid lazy"
              height="100%"
              width="100%"
              data-src="https://repl.it/@AmyShackles/CheckYourDigits?lite=1&amp;outputonly=1"
              frameborder="no"
              src="https://repl.it/@AmyShackles/CheckYourDigits?lite=1&amp;outputonly=1"
              allowFullScreen={true}
              data-was-processed="true"
              sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
            ></iframe>
            <div id="summary">Info</div>
            <div id="detail">
              <p>
                Press the green run button to start
                <br />
                Follow instructions in the terminal
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
)

export default CheckYourDigits
