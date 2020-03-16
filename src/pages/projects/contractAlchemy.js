import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import LeftArrow from "../../images/angle-double-left.svg"
import RightArrow from "../../images/angle-double-right.svg"
import Screenshot from "../../components/images/contractalchemy"
import SEO from "../../components/seo"
import "../../styles/style.css"

const ContractAlchemy = () => (
  <Layout>
    <SEO title="Contact" />
    <div role="navigation">
      <div class="content-nav">
        <ul>
          <li>
            <a href="/projects/checkYourDigits" alt="link to Check Your Digits">
              <img src={LeftArrow} alt="arrow left" />
            </a>
          </li>
          <li>
            <div class="linkToProjects">
              <Link to="/projects"> Projects</Link>
            </div>
          </li>
          <li>
            <a
              href="/projects/iconsForGreatGood"
              alt="link to Icons for Great Good"
            >
              <img src={RightArrow} alt="arrow right" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <main role="main">
      <div className="img-text">
        <Screenshot id="contract-alchemy-screenshot" />
        <div className="main-text">
          <h1 className="page-title">contract Alchemy</h1>
          <h2>
            contractAlchemy is an application targeted toward independent
            contractors to help them to organize the work they do for different
            contracts and clients. Users can create clients, create jobs under a
            specific client, mark the parts that go into a job, and write notes
            on clients or jobs. Users can also generate invoices out of a
            combination of parts and hours on a job. <br />
            <br />
            contractAlchemy was built as part of a Capstone project over the
            course of roughly five weeks with a three-person team.
          </h2>
          <div className="project-details">
            <h2>Tech</h2>
            <ul>
              <li>
                <h3>
                  React, Django, PostgreSQL, GraphQL, Graphene-Django, Apollo
                  Client, Stripe API, SendGrid API
                </h3>
              </li>
              <li>
                <h3>Language : JavaScript, Python</h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="buttons">
          <a
            href="https://github.com/lambda-school-labs/cs10-labor-pos"
            aria-label="link to Github repo for ContractAlchemy"
            className="button"
            role="button"
            type="button"
          >
            <span>Source Code</span>
          </a>
          <a
            href="https://contractalchemypos.com"
            aria-label="link to contractAlchemy website"
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

export default ContractAlchemy
