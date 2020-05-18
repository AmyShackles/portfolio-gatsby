import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/style.css"

const ResumePage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)
  const resume = data.allFile.edges[0].node.publicURL
  return (
    <Layout>
      <SEO title="Resume" />
      <main role="main" id="resume">
        <h1>Resume</h1>
        <div className="row skill">
          <div className="three columns header-col">
            <h2>
              <span>Tools & Tech</span>
            </h2>
          </div>
          <div id="tools-and-tech" className="nine columns main-col">
            <div className="three columns">
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Bootstrap</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Responsive Web Design</li>
              </ul>
            </div>
            <div className="three columns">
              <ul>
                <li>Git</li>
                <li>Django</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>REST</li>
                <li>GraphQL</li>
              </ul>
            </div>
            <div className="three columns">
              <ul>
                <li>PostgreSQL</li>
                <li>SQLite</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
              </ul>
            </div>
            <div className="three columns">
              <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>C</li>
                <li>Swift</li>
                <li>Elixir</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row open-source">
          <div className="three columns header-col">
            <h2>
              <span>Open Source Contributions</span>
            </h2>
          </div>
          <div className="main-col" id="open-source">
            <div className="twelve columns" id="contributions-id">
              <h3>
                <a href="https://github.com/atom/language-python/commits?author=AmyShackles">
                  Atom/language-python
                </a>
              </h3>
              <h3>
                <a href="https://github.com/beejjorgensen/bgc/commits?author=amyshackles">
                  Beej's Guide to C Programming
                </a>
              </h3>
            </div>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h2>
              <span>Experience</span>
            </h2>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Skiplist</h3>
                <h4 className="info">
                  Software Developer <span>&nbsp;&bull;&nbsp;</span>
                  <em className="date">May 2019-present</em>
                </h4>

                <p>
                  ◆ Developed a process to prepare data for indexing by aggregating data from several collections and updating/reindexing on data change without disruption of search capability
                </p>
                <p>
                  ◆ Volunteered to rescue a failed demo, turning it into an MVP in 2 weeks, saving the contract
               </p>
                <p>
                  ◆  Authored a script to streamline project onboarding that pulled down all 6 relevant git
repositories, linking where necessary, and installed dependencies
               </p>
                <p>
                  ◆ Championed testing, increasing coverage from 0 to 100% in critical areas
               </p>
             </div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3>Allegis Transcription</h3>
                <h4 className="info">
                  Quality Assurance Lead <span>&nbsp;&bull;&nbsp;</span>
                  <em className="date">October 2016 - January 2018</em>
                </h4>
                <p>
                  ◆ Led a 4-person team responsible for performing quality
                  assessment of over 200 contractors on a quarterly basis
                </p>
                <p>
                  ◆ Conducted 1:1 meetings with individuals falling below
                  quality standards to walk through assessments and provide
                  mentorship
                </p>
                <p>
                  ◆ Trained new members of Quality Assurance team (including QA
                  Manager)
                </p>
                <p>
                  ◆ Maintained spreadsheets tracking progress of QA team,
                  updating QA Manager on status
                </p>
              </div>
              <div className="twelve columns">
                <h3>Allegis Transcription</h3>
                <h4 className="info">
                  Quality Assurance Assistant <span>&nbsp;&bull;&nbsp;</span>
                  <em className="date">September 2015 - October 2016</em>
                </h4>

                <p>
                  ◆ Compared insurance transcripts to the audio associated with
                  those claims to ensure accuracy of transcription
                </p>
                <p>
                  ◆ Advocated for changes in QA policy to allow for priority
                  escalation
                </p>
                <p>
                  ◆ Aided in establishing more measurable quality assurance
                  standards in order to standardize assessment
                </p>
                <p>
                  ◆ Created and maintained spreadsheets to track QA team
                  progress and track QA assessment history to observe patterns
                  in behavior
                </p>
              </div>
              <div className="twelve columns">
                <h3>Self-employed</h3>
                <h4 className="info">
                  Freelance Transcriptionist <span>&nbsp;&bull;&nbsp;</span>
                  <em className="date">2007 - 2018</em>
                </h4>

                <p>
                  ◆ Balanced academic, entertainment, corporate, and insurance
                  contracts to provide strict, smart, and clean verbatim
                  transcripts in UK or US English formatted according to client
                  specifications
                </p>
                <p>
                  ◆ Communicated with clients on any factors that may cause a
                  transcript to be completed after the agreed-upon deadline as
                  soon as those factors became apparent (poor audio quality,
                  accents I was unfamiliar with, etc.)
                </p>
                <p>
                  ◆ Researched industry-specific information in order to ensure
                  accuracy
                </p>
                <p>◆ Maintained strict confidentiality</p>
              </div>
              <div className="twelve columns">
                <h3>Greenfield Advisors</h3>
                <h4 className="info">
                  Data Entry Clerk <span>&nbsp;&bull;&nbsp;</span>
                  <em className="date">August 2013 - June 2014</em>
                </h4>

                <p>
                  ◆ Processed information from scanned documents to enter into a
                  database for further analysis
                </p>
                <p>
                  ◆ Performed online research in order to standardize records
                  and provide the most complete information possible
                </p>
                <p>
                  ◆ Created a spreadsheet to aggregate team resources in order
                  to improve consistency of data
                </p>
                <p>◆ Maintained strict confidentiality</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row education">
          <div className="three columns header-col">
            <h2>
              <span>Education</span>
            </h2>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>
                  Certificate in Computer Science with Full-Stack Web
                  Development Emphasis
                </h3>
                <h4 className="info">
                  Lambda School <span>&nbsp;&bull;&nbsp;</span>
                  <em className="date">April 2018 - October 2018</em>
                </h4>
                <p>
                  {`◆ Completed 15 weeks of full-stack web development and 10
                  weeks of computer science curriculum (Curriculum can be found `}
                  <a href="https://learn.lambdaschool.com/course/cs-fsw)">
                    here
                  </a>
                  .
                </p>
                <p>
                  ◆ Collaborated with other students in Lambda Labs to create an
                  application that met client specications and negotiated
                  changes in project scope when our team went from a 5-person
                  team to a 3-person team in the beginning of the second week
                </p>
                <h3>B.S. Psychology, Secondary major in Anthropology</h3>
                <h4 className="info">
                  Washington State University <span>&nbsp;&bull;&nbsp;</span>
                  <em className="date">2007-2011</em>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row education">
          <div className="three columns header-col">
            <h2>
              <span>Volunteering</span>
            </h2>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Crisis Interventionist</h3>
                <h4 className="info">
                  IMAlive<span>&nbsp;&bull;&nbsp;</span>
                  <em className="date">June 2014 - January 2016</em>
                </h4>
                <p>
                  ◆ Obtained HEART certification and completed over 200
                  volunteer hours in a year before switching to a supervisory
                  role where I supervised other crisis interventionist
                  volunteers
                </p>
                <p>
                  ◆ Engaged in online chat conversations with individuals in
                  crisis, providing acceptance, respect, and empathy while
                  utilizing active listening skills to assess their situation
                  before providing information and/or referrals to get the help
                  and support they needed
                </p>
              </div>
            </div>
          </div>
          <div id="download-resume-button">
            <button className="columns download">
              <a href={resume} download>
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </main>
    </Layout>
  )
}
export default ResumePage
