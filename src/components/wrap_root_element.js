import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Code from "./code_block"

const components = {
  h2: props => (
    <h2
      style={{
        fontFamily:
          "Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
      }}
      {...props}
    />
  ),
  pre: props => <Code {...props} />,
  wrapper: ({ children }) => <>{children}</>,
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
