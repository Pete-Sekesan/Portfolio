import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/pete-windsor.jpg';

import { AiFillGithub, AiOutlineTwitter, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              I am a Software Engineer currently working as a Frontend UX
              Developer for{' '}
              <a
                href='https://www.adelphi.edu'
                target='_blank'
                rel='noreferrer'
                className='icon-colour'
              >
                <i>
                  <b className='purple'> Adelphi University </b>
                </i>
              </a>{' '}
              in Garden City, NY.
              <br />
              <br />I have a serious passion for building excellent software and
              web technologies that help improve the lives of their users.
              <br />I am interested in the entire full-stack spectrum and would
              love to work on ambitious&nbsp;
              <i>
                <b className='purple'>Web Technologies, Sites and Products </b>
              </i>{' '}
              with positive people. &nbsp;
              <br />
              <br />
              Whenever possible, I apply my passion for developing products with{' '}
              <b className='purple'>Node.js, PostgreSQL</b> and
              <i>
                <b className='purple'>
                  {' '}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className='purple'> React.js, jQuery and Gatsby.js</b>
              </i>
              &nbsp; and always looking to learn something new.
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            np
            <img src={myImg} className='img-fluid borderRadius' alt='avatar' />
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='purple'>connect </span>with me
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/Pete-Sekesan'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://twitter.com/PeterSekesan'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/petersekesan/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='mailto: psekesan@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
