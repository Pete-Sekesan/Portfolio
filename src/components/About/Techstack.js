import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPostgresql,
  DiJqueryLogo,
  DiGit,
  DiCss3Full,
  DiHtml5,
} from 'react-icons/di';
import { SiPhp, SiSwift } from 'react-icons/si';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJavascript1 />
        <p className='tech-desc'>Javascript</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiNodejs />
        <p className='tech-desc'>Node.js</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiReact />
        <p className='tech-desc'>React</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiPostgresql />
        <p className='tech-desc'>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiSwift />
        <p className='tech-desc'>Swift</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJqueryLogo />
        <p className='tech-desc'>jQuery</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiGit />
        <p className='tech-desc'>Git</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiCss3Full />
        <p className='tech-desc'>CSS</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiHtml5 />
        <p className='tech-desc'>HTML</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPhp />
        <p className='tech-desc'>PHP</p>
      </Col>
    </Row>
  );
}

export default Techstack;
