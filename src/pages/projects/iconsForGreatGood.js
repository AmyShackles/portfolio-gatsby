import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import LeftArrow from "../../images/angle-double-left.svg"
import RightArrow from "../../images/angle-double-right.svg"
import Screenshot from "../../components/images/iconsforgreatgood"
import SEO from "../../components/seo"
import "../../styles/style.css"

const IconsForGreatGood = () => (
  <Layout>
    <SEO title="Icons for Great Good" />
    <div role="navigation">
      <div className="content-nav">
        <ul>
          <li>
            <Link to="/projects/contractAlchemy">
              <img src={LeftArrow} alt="link to Contract Alchemy"/>
            </Link>
          </li>
          <li>
            <div className="linkToProjects">
              <Link to="/projects"> Projects</Link>
            </div>
          </li>
          <li>
            <Link to="/projects/lispInterpreter" >
              <img src={RightArrow} alt="Link to Lisp Interpreter" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <main className="main-projects">
      <div className="img-text">
        <Screenshot id="icons-for-great-good-screenshot" />
        <div className="main-text">
          <h1 className="page-title">Icons for Great Good</h1>
          <h2>
            Have you ever wanted to use random text to generate a hash and then
            have that hash turn into a robot? With the power of Robohash.org and
            Icons For Great Good, now you can! The website is hosted on Netlify
            and features all of the options you know and love from Robohash.org
            without the need to append the set query to the end of your text -
            just select the type of monster you want to receive in the menu and
            Icons for Great Good will take care of the rest.
          </h2>
          <div className="project-details">
            <h2 className="tech">Tech</h2>
            <ul>
              <li>
                <h3>React, Robohash.org, fetch, Bootstrap</h3>
              </li>
              <li>
                <h3>Language : JavaScript</h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="buttons">
          <a
            href="https://github.com/AmyShackles/icons-for-great-good"
            aria-label="link to Github repo for icons-for-great-good"
            className="button"
            role="button"
            type="button"
          >
            <span>Source Code</span>
          </a>
          <a
            href="https://icons-for-great-good.netlify.com"
            aria-label="link to icons-for-great-good.netlify website"
            className="button"
            type="button"
            role="button"
          >
            <span>Website</span>
          </a>
        </div>
      </div>
    </main>
  </Layout>
)

export default IconsForGreatGood
