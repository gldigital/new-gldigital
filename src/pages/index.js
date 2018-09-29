import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import './index.css'

const IndexPage = ({ data }) => (
  <Layout>
    {/* 
      =============
      Hero Section
      =============
    */}
    <div className="container">
      <div className="content">
        <div className="row pt-5">
          <h1 className="h1 display-2">No Pain No Gain</h1>
        </div>
        <div className="row pt-4 pb-4">
          <p className="lead">
            The digital world can be a pain. Lucky for you, I specialize in
            eliminating pain points in the digital space! Whether it's web
            design or app developemnt, I have your back.
          </p>
        </div>
        <div className="row pt-4 pb-4">
          <Link to="#featured">
            {' '}
            <button type="button" className="btn btn-outline-dark mr-3 btn-lg">
              View Portfolio
            </button>
          </Link>
          <Link to="#connect">
            {' '}
            <button type="button" className="btn btn-outline-dark mr-3 btn-lg">
              Let's Connect
            </button>
          </Link>
        </div>
      </div>
    </div>
    <Img fluid={data.image1.childImageSharp.fluid} />
    {/* 
      =============
      Featured Section 
      =============
    */}
    <section className="repeatBg">
      <div className="container  pt-3 pb-3">
        {/* urbit */}
        <div className="row pt-5 pb-5">
          <div className="col-sm-6 text-white">
            <h2 className="">URBIT | Full-stack MERN App</h2>
            <p>
              The goal for URBIT was to create a full-stack app built with React
              that would track the latest crypto prices as well as follow the
              latest news on Cryptocurrency. In the profile section, you can
              customize your news outlets to get only cryptocurrency news from
              your favorite source and also customize your news topics
            </p>
            <p>Skills Used:</p>
          </div>
          <div className="col-sm-6">
            <Img fluid={data.urbit.childImageSharp.fluid} />
          </div>
        </div>
        {/* Doguments */}
        <div className="row pt-5 pb-5">
          <div className="col-sm-6">
            <Img fluid={data.doguments.childImageSharp.fluid} />
          </div>
          <div className="col-sm-6 text-white">
            <h2 className="">Doguments| Full-Stack App</h2>
            <p>
              Doguments is an easy-to-use tracking app for all of your dog's
              most important life events. Keep up-to-date with birthdays, vet
              visits, medications, and more! Create an account and get all your
              Doguments in order!
            </p>
            <p>
              In this group project, my role was to develop the authentication
              strategy and logic as well as front-end development.
            </p>
            <p>Skills Used:</p>
          </div>
        </div>
        {/* What to Weather */}
        <div className="row pt-5 pb-5">
          <div className="col-sm-6 text-white">
            <h2 className="">What To Weather</h2>
            <p>
              Have you ever left your house without an umbrella and realized
              later it was going to rain? Of course, you did! Why? Becuase you
              did not use our app, "What to Weather"! This app suggests what to
              wear based on the weather conditions. WTW uses the Open Weather
              API and the eBay API. In this group project, I lead the UI/UX and
              Weather API functionality.
            </p>
            <p>Skills Used:</p>
          </div>
          <div className="col-sm-6">
            <Img fluid={data.whatToWeather.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </section>
    {/* 
      =============
      Additional Projects Section 
      =============
    */}
    <div className="container">
      <div className="row">
        <h1 id="additional">Additional Section</h1>
      </div>
    </div>
    {/* 
      =============
      About Section 
      =============
    */}
    <div className="container">
      <div className="row pt-3 pb-3">
        <div className="col-md-6">
          <h2 className="display-3">About Greg</h2>
          <p>
            I am a Full-Stack Web Developer with a robust knowledge of UI/UX
            design. Proficient with HTML, CSS, Bootstrap, Javascript, jQuery,
            ReactJS , AJAX, NodeJS, MongoDB, and ExpressJS. My Web Project
            Management background has fueled my desire to become a Web
            Developer. Web Development is a critical plateau for me to expand my
            knowledge of programming languages and protocols to create
            user-friendly web applications. P ossessing additional experience,
            which includes Firebase, MySQL, PHP, Project Management, Digital
            Marketing tactics such as SEO and designing websites to meet goals
            and objectives for stakeholders .
          </p>
          <p>
            Outside of tech you can catch me outside smoking a mean brisket,
            playing basketball, touring bourbon distilleries (neat please),
            trying to find the latest and greatest IPA at Growler House off
            Guadalupe, and hanging with my two favorite ladies you see in the
            picture.
          </p>
        </div>
        <div className="col-md-6">
          <Img fluid={data.family.childImageSharp.fluid} />
        </div>
      </div>
    </div>
    {/* 
      =============
      Let's Connect Section 
      =============
    */}
    <div className="container d-flex justify-content-center">
      <div className="aboutWrapper connectBG ">
        <div className="row ">
          <div className="col-sm-12 text-center">
              <h2 className="display-4 text-white">Let's Connects</h2>
          </div>
        </div>
      </div>
    </div>
    <Img fluid={data.connectImg.childImageSharp.fluid} />
  </Layout>
)

export const heroImg = graphql`
  fragment bgImg on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`
export const connectImg = graphql`
  fragment connectImg on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`
export const featuredImg = graphql`
  fragment featuredImg on File {
    childImageSharp {
      fluid(maxWidth: 450, maxHeight: 350) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`
export const aboutImg = graphql`
  fragment aboutImg on File {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "heroIMG.jpeg" }) {
      ...bgImg
    }
    urbit: file(relativePath: { eq: "urbit1.png" }) {
      ...featuredImg
    }
    doguments: file(relativePath: { eq: "doguments.png" }) {
      ...featuredImg
    }
    whatToWeather: file(relativePath: { eq: "gldigital_mainlogo.png" }) {
      ...featuredImg
    }
    family: file(relativePath: { eq: "family.jpg" }) {
      ...aboutImg
    }
    connectImg: file(relativePath: { eq: "connectBg.jpg" }) {
      ...connectImg
    }
  }
`
export default IndexPage
