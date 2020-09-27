import React from 'react';
import Img from 'gatsby-image';
import {useStaticQuery, graphql} from 'gatsby';

const Projects = () => {
    return (
        <div className='banner'>
            <div className='container'>
                  <h2>Project 1</h2>
                  <h2>Project 2</h2>
                  <h2>Project 3</h2>
                  <h2>Project 4</h2>
                  <h2>Project 5</h2>
            </div>
        </div>
    )
}

export default Projects;