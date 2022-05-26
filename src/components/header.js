import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "../images/logo.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#f6f8fa`,
      minHeight: 90,
      position: "fixed",
      opacity: "95%",
      width: "100%",
      borderBottom: "0.2px solid #d6d6d6",
    }}
  >
    <div
      style={{
        maxWidth: 960,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
      }}
    >
      <img
        src={Logo}
        alt="Logo"
        style={{ paddingLeft: 45, paddingTop: 30, width: 220 }}
      ></img>
      <p
        style={{
          color: "#c3c3c3",
          fontFamily:
            "Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
          fontStyle: "italic",
          fontWeight: 600,
        }}
      >
        docs.
      </p>
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
