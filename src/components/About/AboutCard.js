import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaRunning, FaPlane } from 'react-icons/fa';
import { GiRetroController } from 'react-icons/gi';
import { RiMickeyFill } from 'react-icons/ri';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, my name is{' '}
            <span className='purple'>Peter Sekesan </span>
            and I'm from <span className='purple'> New York.</span>
            <br />I am a software engineer working as a Frontend UX Developer
            for Adelphi University.
            <br />
            <br />
            In May of 2020, my career in Events Marketing and Management came to
            an end due to some mass layoffs at my company. I took the time (and
            severance which was certainly helpful) to re-focus a bit and decided
            to finally pursue my intrigue for programming into a career. I
            enrolled and later graduated from a 6-month long intensive Software
            Engineering boot camp. Since then I have been working on some small
            personal projects as well as my current role as Frontend UX
            Developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <FaPlane /> Traveling
            </li>
            <li className='about-activity'>
              <FaRunning /> Exercising
            </li>
            <li className='about-activity'>
              <GiRetroController /> Playing Games
            </li>
            <li className='about-activity'>
              <RiMickeyFill /> Disney
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: '#087E8B' }}>
            "It's kind of fun to do the impossible."{' '}
          </p>
          <footer className='blockquote-footer'>Walt Disney</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
