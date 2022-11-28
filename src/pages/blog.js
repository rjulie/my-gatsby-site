import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

const BlogPage = ( {data} ) => {
  // console.log(data)
  return (
    <Layout pageTitle="Blog">
        {/* we want to map on the array */}
        {data.allMdx.nodes.map(node => {
          return <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          date(formatString: "dddd, MMMM Do YYYY")
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage
