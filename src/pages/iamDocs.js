import React from "react"
import { makeStyles } from "@material-ui/core"
import Page from "./docs.mdx"
import Layout from "../components/layout"
import { Navigation } from "react-minimal-side-navigation"
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css"
import Landscape from "../images/Landscape-Photography-steps.jpeg"
import "../styles/docs.css"

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flex: "1 1",
    flexDirection: "row",
    justifyContent: "start",
    fontFamily:
      "Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  },
  sidebar: {
    minWidth: 300,
    display: "flex",
    flexDirection: "column",
    flex: 0.3,
    height: "inherit",
    position: "sticky",
    top: 0,
    left: 0,
    padding: "20px",
    paddingLeft: 0,
    paddingTop: 0,
    overflowY: "scroll",
    borderRadius: 8,
    zIndex: 10,
  },
}))

const DocsPage = () => {
  const classes = useStyles()

  const sidebar = () => (
    <Navigation
      activeItemId="AWS_ARN"
      onSelect={({ itemId }) => {
        const element = document.getElementById(itemId)
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + -120
        window.scrollTo({ top: y, behavior: "smooth" })
      }}
      items={[
        {
          title: "AWS ARN ID",
          itemId: "AWS_ARN",
          subNav: [
            {
              title: "subheading 1",
              itemId: "subheading1",
            },
            {
              title: "subheading 2",
              itemId: "subheading2",
            },
            {
              title: "subheading 3",
              itemId: "subheading3",
            },
            {
              title: "subheading 4",
              itemId: "subheading4",
            },
          ],
        },
      ]}
    />
  )

  return (
    <Layout style={{ marginLeft: 0 }}>
      <div className={classes.container}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            minWidth: 300,
            background: "#f6f8fa",
            borderRight: "0.2px solid #d6d6d6",
            marginTop: 93,
            height: "-webkit-fill-available",
          }}
        >
          {sidebar()}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: 120,
            paddingLeft: 300,
            width: "100%",
            alignItems: "center",
          }}
        >
          <div>
            <Page images={[Landscape]} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DocsPage
