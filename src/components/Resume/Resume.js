import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import Resumecontent from './ResumeContent';
//import axios from "axios";
import pdf from '../../Assets/peterSekesanResumeMay2022.pdf';
import { AiOutlineDownload } from 'react-icons/ai';

function Resume() {
  // const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  // const [spojRank, upadteSpojRank] = useState(0);
  // const [hackerrank, upadteHackerank] = useState(0);
  // const [sem, upadateSem] = useState(0);
  // const [cgpa, upadteCgpa] = useState(0);

  // useEffect(() => {
  //   axios
  //     .get(uri)
  //     .then((res) => {
  //       upadteSpojRank(res.data.message[0].spojRank);
  //       upadteHackerank(res.data.message[1].hackerrank);
  //       upadteCgpa(res.data.message[2].cgpa);
  //       upadateSem(res.data.message[3].sem);ß
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <Container fluid className='resume-section'>
      <Container>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant='primary' href={pdf} target='_blank'>
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Row className='resume'>
          <Col md={6} className='resume-left'>
            <h3 className='resume-title'>Experience</h3>
            <Resumecontent
              title='Frontend UX Developer [Adelphi University]'
              date='Nov 2021 - Present'
              content={[
                'Developed reusable custom component technologies using company logos yielding an increase in revenue and brand visibility',
                'Maintained graphic standards and branding throughout the entire user experience',
                'Collaborated with compliance specialists to ensure widespread experience on accessibility standards & laws and code core components such as WCAG 2 . 0, WCAG 2.1, CVAA, ADA, Section 504, and Section 508 .',
              ]}
            />
            <Resumecontent
              title='Frontend Engineer [Black Lake Labs]'
              date='May 2021 - September 2021'
              content={[
                'Coded alongside lead developer to overhaul UI built with React in conjunction with Figma wireframes',
                'Partner with Project Managers on new feature ideation and experiment design',
              ]}
            />
            <Resumecontent
              title='Events Management Specialist [CANON USA]'
              date='Oct 2012 - May 2020'
              content={[
                'Leveraged leadership expertise to direct all aspects of major media and trade show events yielding 85% increase in market share',
                'Led teams of up to nine for major events such as Super Bowl, Kentucky Derby and Indy 500',
              ]}
            />
            <h3 className='resume-title'>Extracurricular Activities</h3>
            <Resumecontent
              title='JSworld Conference [Amsterdam-2021 Frontend Love]'
              content={[
                'Participated in three day long intensive workshops surrounding all thing Javascript',
              ]}
            />
          </Col>
          <Col md={6} className='resume-right'>
            <h3 className='resume-title'>Education</h3>
            <Resumecontent
              title='Software Engineering Program [Thinkful - Brookyln] '
              date='Oct 2020 - April 2021'
              content={[`Certification`]}
            />
            <Resumecontent
              title='Marketing [Nassau Community College - Garden City,NY]'
              content={[]}
            />

            {/* <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            /> */}
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant='primary' href={pdf} target='_blank'>
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
