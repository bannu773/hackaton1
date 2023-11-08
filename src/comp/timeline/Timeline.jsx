import React, { useState } from "react";
// import './App.css';
import backgroundImage from "../../assets/stars1.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import { useParallax } from "react-scroll-parallax";
import Arrow from './../../assets/svg/svg.svg'

const TimeLine = ({ timelineRef }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="bg" style={{ backgroundRepeat: "repeat" }}>
      <style>
        {`
          /* Apply scale transformation on hover */
          .outerpart{
            overflow:hidden;
          }
          .outerpart::before{
            content: "";
            width: 800px;
            height: 800px;
            border-radius: 50%;
            background-color: rgb(150, 11, 231);
            filter: blur(400px);
            z-index: 0;
            position: absolute;
            translate: 800px 200px; 
      
          }
          .VerticalTimeline
          {
            overflow: visible;
            z-index: 1;
          }
          .vertical-timeline-element {
            transition: transform 0.3s ease-in-out;
            font-family: 'DM Sans', sans-serif;
            transform-origin: center bottom;
            transform: scale(1); /* Initial size, can be adjusted as needed */
            text-align:justify;
          }
          .vertical-timeline-element:hover {
            transform: scale(1.1); /* Larger size on hover, adjust the scale factor as needed */
          }
          @media screen and (min-width: 1024px) {
            .VerticalTimeline{
              max-width: 1070px;
              margin: auto auto;
              position: relative;
              padding: 2em 4em;
            }
            .vertical-timeline-element:hover {
              transform: scale(0.9); /* Larger size on hover, adjust the scale factor as needed */
            }
          }
          @media screen and (min-width: 992px){
            .VerticalTimeline{
              min-width: 1000px;
              margin: auto auto;
              position: relative;
              padding: 1em 0;
              z-index: 1;
            }
            .vertical-timeline-element {
              position: relative;
              margin: 2em 4em 2em 4em;
          }
            .vertical-timeline-element:hover {
              transform: scale(1.05); /* Larger size on hover, adjust the scale factor as needed */
            }
          }
          @media screen and (max-width: 991px) {
            .VerticalTimeline{
              min-width: 1000px;
              margin: auto auto;
              position: relative;
              padding: 2em 4em;
              z-index: 1;
            }
            .vertical-timeline-element {
              position: relative;
              margin: 2em 1em 2em 2.5em;
          }
            .vertical-timeline-element:hover {
              transform: scale(1.05); /* Larger size on hover, adjust the scale factor as needed */
            }
          } 
          
          .grad1 {
            content: "";
            width: 400px;
            height: 400px;
            border-radius: 50%;
            background-color: rgb(73, 43, 226);
            filter: blur(300px);
            z-index: 10;
            position: absolute;
            translate: 600px 600px;
            right:800px;
          }     
          
            p span
           {
            color:pink;
           }
        `}
      </style>
      <div
        className=""
        style={{ backgroundImage: `url(${backgroundImage})` }}
        ref={timelineRef}
      >
        <div className="outerpart">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="10-09-2023"
              contentStyle={{
                background: "rgba(144, 19, 254, 0.15)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "white",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <div className="grad1"></div>
              <h3 className="vertical-timeline-element-title">PHASE-1</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Problem Statement Submission
              </h4>
              <p>

              Aavishkaar 2024 invites early submissions of 1-minute 
              video pitches and abstracts of innovative solutions for problem statements, 
              promising mentorship and theme alignment for your solutions. <br />
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="30-09-2023"
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(144, 19, 254, 0.15)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "white",
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">PHASE-2</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Evaluation{" "}
              </h4>
              <p>
              Two-phase evaluation process is designed for fair and insightful assessment, 
              focusing on assessing innovative solutions to determine their quality and potential impact.


              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="30-11-2023"
              contentStyle={{
                background: "rgba(144, 19, 254, 0.15)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "white",
              }}
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">PHASE-3</h3>
              <h4 className="vertical-timeline-element-subtitle">Mentorship</h4>
              <p>
              Mentorship is central to Aavishkaar 2023, with the first 100 participants paired with dedicated mentors from various fields, 
              offering weekly guidance tailored to mentors' schedules 
              and ongoing evaluations that impact the final assessment to ensure support for innovation.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="20-12-2023"
              contentStyle={{
                background: "rgba(144, 19, 254, 0.15)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "white",
              }}
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <div className="grad2"></div>
              <h3 className="vertical-timeline-element-title">PHASE-4</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Progress Review
              </h4>
              <p>
              Teams follow a structured presentation format, showcasing prototypes and receiving clarifications during mentorship sessions, 
              while 'build and break' exercises for in-depth project evaluation ensure progress review vital for 
              project selection and success, with ongoing assessment and feedback on project advancements.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="10-01-2024"
              contentStyle={{
                background: "rgba(144, 19, 254, 0.15)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "white",
              }}
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">PHASE-5</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Grand Finale
              </h4>
              <p>
                {" "}
                
                The Grand Finale marks the remarkable culmination of Aavishkaar 2023, where finalist teams showcase inventive 
                concepts and solutions to the jury and industry professionals, and careful project assessment leads 
                to rewarding the most exemplary teams with avant-garde ideas.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="30-01-2024"
              contentStyle={{
                background: "rgba(144, 19, 254, 0.15)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "white",
              }}
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              icon={<StarIcon />}
            >
              <h3 className="vertical-timeline-element-title">Declarations of Results</h3>


            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
