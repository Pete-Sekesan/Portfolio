import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  SiGithub,
  SiVisualstudiocode,
  SiNetlify,
  SiPostman,
  SiHeroku,
  SiFigma,
  SiDocker,
  SiXcode,
} from 'react-icons/si';

import { IoLogoVercel } from 'react-icons/io5';

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <SiGithub />
        <p className='tech-desc'>GitHub</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVisualstudiocode />
        <p className='tech-desc'>VS Code</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiNetlify />
        <p className='tech-desc'>Netlify</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiDocker />
        <p className='tech-desc'>Docker</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiXcode />
        <p className='tech-desc'>XCode</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPostman />
        <p className='tech-desc'>Postman</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiHeroku />
        <p className='tech-desc'>Heroku</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <IoLogoVercel />
        <p className='tech-desc'>Vercel</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiFigma />
        <p className='tech-desc'>Figma</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
