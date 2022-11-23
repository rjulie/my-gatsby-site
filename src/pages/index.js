// Step 1: Import React
import * as React from 'react'
// import composants
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage src="../images/rafael-garcin-_AzAoe3UmqY-unsplash.jpg" alt="landscape" />
      <StaticImage src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="lake in front of moutains" />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage
