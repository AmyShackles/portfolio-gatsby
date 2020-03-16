import React from "react"
import Layout from "../components/layout"
import TwitterIcon from "../images/twitter-square.svg"
import GithubIcon from "../images/github.svg"
import LinkedInIcon from "../images/linkedin.svg"
import SEO from "../components/seo"
import "../styles/style.css"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <main role="main">
      <div id="contact-page" className="content-holder">
        <div className="contact-page">
          <h1 className="page-title">Get in touch!</h1>
          <h2>Amy Shackles</h2>
          <h2>
            <a
              href="tel:+1-509-592-8020"
              aria-label="link to start phone call to 509-592-8020"
            >
              509-592-8020
            </a>
          </h2>
          <h2>
            <a
              href="mailto:amyshackles@gmail.com"
              aria-label="link to send email to amyshackles@gmail.com"
            >
              amyshackles@gmail.com
            </a>
          </h2>
          <ul>
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
        </div>
      </div>
    </main>
  </Layout>
)

export default ContactPage
