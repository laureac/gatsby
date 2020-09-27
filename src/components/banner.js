import React from 'react';
import Img from 'gatsby-image';
import {useStaticQuery, graphql} from 'gatsby';

const Banner = () => {

    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "wave2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <div className='banner'>
            <div className='container'>
                <div className='row'>
                    <div className='main-text'>Portfolio </div>
                    <div className='main-img'>
                        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                    </div>
                </div>
                <div className='scroll'>
                    <span>
                        scroll down
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Banner;