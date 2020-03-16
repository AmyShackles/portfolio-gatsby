import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

const Header = () => (
  <header role="banner">
    <div className="logo-holder">
      <Link aria-label="link to home" to="/" className="logo">
        <Logo />
        <span className="logomark">my Shackles</span>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
