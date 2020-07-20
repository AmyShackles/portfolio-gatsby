import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import LeftArrow from "../../images/angle-double-left.svg"
import RightArrow from "../../images/angle-double-right.svg"
import SEO from "../../components/seo"
import "../../styles/style.css"

const BaseConverter = () => (
  <Layout>
    <SEO title="Base Converter" />
    <div role="navigation">
      <div className="content-nav">
        <ul>
          <li>
            <Link to="/projects/socialMediaDashboard" alt="link to Social Media Dashboard">
              <img src={LeftArrow} alt="arrow left" />
            </Link>
          </li>
          <li>
            <div className="linkToProjects">
              <Link to="/projects"> Projects</Link>
            </div>
          </li>
          <li>
            <Link to="/projects/checkYourDigits" alt="link to Check Your Digits">
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
            <h1 className="page-title">Base Converter</h1>
            <h2>
              Program parses the input string, determines the number base from
              the first two values of input (0x for hexadecimal, 0b for binary,
              0 for octal) and then converts that number into binary(2),
              ternary(3), quaternary(4), quinary(5), senary(6), octal(8),
              decimal(10), duodecimal(12), haxadecimal(16), vigesimal(20), and
              base 36.
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
                  href="https://repl.it/@AmyShackles/NumbersInDifferentBases"
                  aria-label="link to source code for Check Your Digits on repl.it"
                  className="button"
                  role="button"
                  type="button"
                >
                  <span>Source Code</span>
                </a>
                <a
                  href="https://repl.it/@AmyShackles/NumbersInDifferentBases?lite=1&amp;outputonly=1"
                  aria-label="link to program for Numbers in Different Bases"
                  className="button responsive"
                  role="button"
                  type="button"
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
              title="BaseConverter"
              className="scale-with-grid lazy"
              height="100%"
              width="100%"
              data-src="https://repl.it/@AmyShackles/NumbersInDifferentBases?lite=1&amp;outputonly=1"
              frameBorder="no"
              src="https://repl.it/@AmyShackles/NumbersInDifferentBases?lite=1&amp;outputonly=1"
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

export default BaseConverter
