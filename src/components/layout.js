/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Header from "./header"
import GithubIcon from "../images/github.svg"
import LinkedInIcon from "../images/linkedin.svg"
import TwitterIcon from "../images/twitter-square.svg"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <nav role="navigation" className="topnav desktop" id="myTopNav">
        <Link to="/about"> About </Link>
        <div className="dropdown" type="button">
          <div
            className="dropbtn"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Projects
          </div>
          <div className="dropdown-content">
            <Link to="/projects/baseConverter">Base Converter</Link>
            <Link className="active" to="/projects/checkYourDigits">
              Check Your Digits
            </Link>
            <Link to="/projects/contractAlchemy">Contract Alchemy</Link>
            <Link to="/projects/iconsForGreatGood">Icons for Great Good</Link>
            <Link to="/projects/lispInterpreter">Lisp Interpreter</Link>
            <Link to="/projects/notesForGreatGood">Notes for Great Good</Link>
            <Link to="/projects/socialMediaDashboard">
              Social Media Dashboard
            </Link>
          </div>
        </div>
        <Link to="/resume">Resume </Link> <Link to="/contact">Contact</Link>
      </nav>
      <nav role="navigation" className="responsive-nav responsive">
        <button className="icon dropdown" type="button" data-toggle="dropdown">
          ☰
        </button>
        <div className="dropdown-content">
          <Link to="/about"> About </Link>
          <Link to="/projects">Projects </Link> <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      {children}
      <footer id="footer" role="contentinfo">
        <ul>
          <li className="policy-box">
            <span>
              © AmyShackles 2018
              {new Date().getFullYear() !== 2018 &&
                ` - ${new Date().getFullYear()}`}
            </span>
          </li>
          <li>
            <a
              aria-label="link to Amy Shackles' Github profile"
              href="https://github.com/amyshackles"
            >
              <img src={GithubIcon} alt="Github logo" />
            </a>
          </li>
          <li>
            <a
              aria-label="link to Amy Shackles' Twitter profile"
              href="https://twitter.com/amyshackles"
            >
              <img src={TwitterIcon} alt="Twitter logo" />
            </a>
          </li>
          <li>
            <a
              aria-label="link to Amy Shackles' LinkedIn profile"
              href="https://www.linkedin.com/in/amyshackles/"
            >
              <img src={LinkedInIcon} alt="LinkedIn logo" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
