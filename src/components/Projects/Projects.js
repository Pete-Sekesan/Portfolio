import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';

import ghf from '../../Assets/Projects/github-finder-demo.gif';
import noy from '../../Assets/Projects/noy-gif.gif';
import myf from '../../Assets/Projects/myf-demo.gif';
import dis from '../../Assets/Projects/disney-quiz-demo.gif';
import cov from '../../Assets/Projects/covid-tracker.gif';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Container>
        <h1 className='project-heading'>
          My latest <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={cov}
              isBlog={false}
              title='Covid-19 By The Numbers'
              description='This app was created to continue my React Hooks skills along with React Material UI, while also tapping into some important data this day in age. I utilized the React-ChartJS 2 library to help display in a doughnut graph the daily total count of Covid-19 cases and deaths by country. This data was pulled in using Axios from the https://covid19.mathdro.id/api API that scrapes government data sites for up to date numbers. '
              link='https://sleepy-hamilton-f8ea80.netlify.app/'
              link2='https://github.com/Pete-Sekesan/covid-19-tracker'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={myf}
              isBlog={false}
              title='Mind Your Fitness'
              description="This app was created to allow users to have a small, standalone application to log and keep track of their exercise's and to view them all in one central location. A full stack application that utilizes React.js for fast and responsive rendering, this application points to a Node.js/Express server that connects to a PostgreSQL database using Knex as the query builder."
              link='https://mind-your-fitness.vercel.app/'
              link2='https://github.com/Pete-Sekesan/mind-your-fitness'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={ghf}
              isBlog={false}
              title='Github Finder'
              description='React application to search through GitHub users. The application uses the GitHub Users API to make a fetch call to pull in data of any user searched for. Using React with Hooks to render the client side using functional components and Context for state management, the data creates personalized bio page of each user. This application was originally written using class components, which I then refactored to functional components to learn a new skill.'
              link='https://github-finder-flame.vercel.app/'
              linke2='https://github.com/Pete-Sekesan/github-finder'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={noy}
              isBlog={false}
              title='News of Yesteryear'
              description='This is an app based on my love for microfilm. Utilizing the Library of Congresses Chronicling America API, you can search any topic be presented with digital scans of newspapers pertaining to that term dating from 1963 all the way back to 1789! The technology stack for this app included HTML, CSS, JavaScript, jQuery and Restful APIs.'
              link='https://pete-sekesan.github.io/News-of-Yesteryear'
              link2='https://github.com/Pete-Sekesan/News-of-Yesteryear'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={dis}
              isBlog={false}
              title='Disney Quiz App'
              description='This was one of my first projects to create in my program. A short quiz app dedicated to one of my favorite subjects, Disney Parks! The technology stack for this app included HTML, CSS, JavaScript and jQuery.'
              link='https://pete-sekesan.github.io/disney-quiz-app/'
              link='https://github.com/Pete-Sekesan/disney-quiz-app'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
