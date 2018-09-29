import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import './index.css'

const IndexPage = ({ data }) => (
  <Layout>
    {/* Hero */}
    <div className="container" >
      <div className="content">
        <div className="row pt-5">
          <h1 className="h1 display-4">No Pain No Gain</h1>
        </div>
        <div className="row pt-4 pb-4">
          <p>The digital world can be a pain. Lucky for you, I specialize in eliminating pain points in the digital space! Whether it's web design or app developemnt, I have your back.</p>
        </div>
        <div className="row pt-4 pb-4">
          <Link to="#featured"> <button type="button" class="btn btn-outline-dark mr-3 btn-lg">View Portfolio</button></Link>
          <Link to="#connect"> <button type="button" class="btn btn-outline-dark mr-3 btn-lg">Let's Connect</button></Link>
        </div>
      </div>
    </div>
    <Img fluid={data.image1.childImageSharp.fluid} />
    {/* Featured Section */}
    <section className="repeatBg">
      <div className="container">
        <div className="row pt-5 pb-5">
          <h1>hello</h1>
        </div>
      </div>
    </section>
    {/* Addtional Projects Section */}
    <div className="container">
      <div className="row">
        <h1 id="additional">Additional Section</h1>
      </div>
    </div>
    {/* About Section */}
    <div className="container">
      <div className="row">
        <h1 id="about">About Section</h1>
      </div>
    </div>
    {/* Connect Section */}
    <div className="container">
      <div className="row">
        <h1 id="connect">Let's Connect Section</h1>
      </div>
    </div>
  </Layout >
)

export const heroImg = graphql`
fragment bgImg on File  {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
}
`
export const repeatBg = graphql`
fragment repeatBg on File  {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
}
`

export const query = graphql`
  query {
    image1:file(relativePath: { eq: "heroIMG.jpeg" }) {
      ...bgImg
    }

    image2:file(relativePath: { eq: "featureBg.png" }) {
      ...repeatBg
    }
  }
`
export default IndexPage
