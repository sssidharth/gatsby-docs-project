import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwl"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  container: {
    background: "#011627",
    borderRadius: "0.5rem",
    marginTop: "2rem",
    marginBottom: "2rem",
    paddingLeft: "1.5rem",
  },
  language: {
    background: "#ffffff",
    marginRight: "1rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    textTransform: "uppercase",
    borderBottomLeftRadius: "0.5rem",
    borderBottomRightRadius: "0.5rem",
    fontFamily:
      "Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
    fontWeight: "bold",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  copyButton: {
    marginRight: "1.5rem",
    marginTop: "0.5rem",
    padding: "8px 12px",
    background: "#00f5c426",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#E2E8F0",
    fontSize: "14px",
    fontFamily: "sans-serif",
    lineHeight: "1",
  },
}))

const Code = props => {
  const classes = useStyles()
  const className = props.children.props.className || ""
  const code = props.children.props.children.trim()
  const language = className.replace(/language-/, "")
  const file = props.children.props.file
  const [isCopied, setIsCopied] = React.useState(false)

  const copyToClipboard = str => {
    if (navigator.clipboard) {
      // Most modern browsers support the Navigator API
      navigator.clipboard.writeText(str).then(
        function () {
          console.log("Copying to clipboard was successful!")
        },
        function (err) {
          console.error("Could not copy text: ", err)
        }
      )
    } else if (window.clipboardData) {
      // Internet Explorer
      window.clipboardData.setData("Text", str)
    }
  }

  return (
    <div className={classes.container}>
      <div style={{ display: "flex", position: "relative" }}>
        <div className={classes.language}>{`${language}`}</div>
        <div
          style={{
            color: "#9d9d9d",
            fontFamily: "Montserrat",
            fontStyle: "italic",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {file && `${file}`}
        </div>
        <div style={{ flexGrow: "1" }}></div>
        <button
          onClick={() => {
            copyToClipboard(code)
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 1000)
          }}
          className={classes.copyButton}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div
        style={{
          overflow: "auto",
          background: "#011627",
          borderRadius: "0.5rem",
        }}
      >
        <Highlight
          {...defaultProps}
          code={code}
          language={language}
          theme={theme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{
                ...style,
                backgroundColor: "transparent",
                float: "left",
                minWidth: "100%",
              }}
            >
              {tokens.map((line, i) => (
                <div
                  {...getLineProps({ line, key: i })}
                  style={{
                    background: "transparent",
                    display: "block",
                  }}
                >
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}

export default Code
