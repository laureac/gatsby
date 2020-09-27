import React from "react"
import { Link } from "gatsby"
import '../styles/styles.scss'
import Header from '../components/header'
import Banner from '../components/banner'
import Projects from '../components/projects'


const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <Projects />
  </div>
)

export default IndexPage
