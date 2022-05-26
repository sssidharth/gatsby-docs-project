import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import DocsPage from "./iamDocs"

const IndexPage = () => (
  <Layout>
    <DocsPage />
  </Layout>
)

export default IndexPage
