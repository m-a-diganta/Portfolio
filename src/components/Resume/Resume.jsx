import { useState, useEffect } from 'react';
import './Resume.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Resume() {
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(true);

  useEffect(() => {
    setShowExperience(true);
  }, []);

  return (
    <section id="resume" className='resume-container'>
      <h5>Resume</h5>
      <div className="resume-contents">
        <div className="button-container ">
          <button
            className={showExperience ? 'active' : ''}
            onClick={() => { setShowEducation(false); setShowExperience(true); }}
          >
            {showExperience && <i className="fa-solid fa-angles-right"></i>}
            Work Experience
          </button>
          <button
            className={showEducation ? 'active' : ''}
            onClick={() => { setShowEducation(true); setShowExperience(false); }}
          >
            {showEducation && <i className="fa-solid fa-angles-right"></i>}
            Education
          </button>
        </div>
        <div className="resume-content">
          {showEducation && (
            <div className="education animated-section slide-in">
              <div className="education-item">
                <div className="icon-bullet"><i className="fas fa-graduation-cap"></i></div>
                <div>
                  <h7>Master of Information Technology (Extension) <br></br><span className='place'>@ University of Technology Sydney (UTS)</span></h7><br></br>
                  <p className='timeline'>Feb 2025 - Ongoing</p>
                  <p><i className="fa-solid fa-angles-right"></i>Current. GPA 7.00 / 7.00</p>
                  <p><i className="fa-solid fa-angles-right"></i>Relevant Coursework: Project Management, Cloud Computing, Internet Programming.</p>
                </div>
              </div>
              <div className="education-item">
                <div className="icon-bullet"><i className="fas fa-graduation-cap"></i></div>
                <div>
                  <h7>BSc in Computer Science & Engineering <br></br><span className='place'>@ BRAC University</span></h7><br></br>
                  <p className='timeline'>Jan 2020 - Jan 2024</p>
                  <p><i className="fa-solid fa-angles-right"></i>Cum. GPA 3.83 / 4.00</p>
                  <p><i className="fa-solid fa-angles-right"></i>Relevant Coursework: Data Structures, Algorithms, Software Engineering, Artificial Intelligence, Data Science.</p>
                </div>
              </div>
              <div className="education-item">
                <div className="icon-bullet"><i className="fas fa-school"></i></div>
                <div>
                  <h7>HSC<span className='place'>   @ Dhaka College</span></h7><br></br>
                  <p className='timeline'>2019 | Science</p>
                  <p><i className="fa-solid fa-angles-right"></i>GPA 5.00</p>
                </div>
              </div>
              <div className="education-item">
                <div className="icon-bullet"><i className="fas fa-school"></i></div>
                <div>
                  <h7>SSC<span className='place'>   @ Monipur High School & College</span></h7><br></br>
                  <p className='timeline'>2017 | Science</p>
                  <p><i className="fa-solid fa-angles-right"></i>GPA 5.00</p>
                </div>
              </div>
            </div>
          )}
          {showExperience && (
            <div className="experience animated-section slide-in">
              <div className="experience-item">
                <div className="icon-bullet"><i className="fas fa-laptop-code"></i></div>
                <div>
                <h7>Software Engineer (Intern)<a href='https://dream71.com/' target="_blank"><span className='place'> @ Dream71 Bangladesh Ltd </span></a></h7><br></br>
                  <p className='timeline'>Jul 2024 - Oct 2024</p>
                  <p><i className="fa-solid fa-angles-right"></i>Collaborated on agovernment‑level project for Department of Livestock Services (DLS) maintaining performance standards.</p>
                  <p><i className="fa-solid fa-angles-right"></i>Contributed in developing the License and NOC ManagementSystemusingVue.jsandNuxt.js. library for frontend.</p>
                </div>
              </div>
              {/* <div className="experience-item">
                <div className="icon-bullet"><i className="fas fa-laptop-code"></i></div>
                <div>
                <h7>Co-Founder<a href='https://atlantic360.ca/' target="_blank"><span className='place'> @ Atlantic360 </span></a></h7><br></br>
                  <p className='timeline'>Jan 2024 - </p>
                  <p><i className="fa-solid fa-angles-right"></i>Conceptualized and meticulously designed the website, ensuring a seamless user experience and modern aesthetic.</p>
                  <p><i className="fa-solid fa-angles-right"></i>Led technical operations and supervised project management</p>
                </div>
              </div> */}
              <div className="experience-item">
                <div className="icon-bullet"><i className="fas fa-briefcase"></i></div>
                <div>
                  <h7>Student Tutor<span className='place'>   @ BRAC University</span></h7><br></br>
                  <p className='timeline'>Sep 2022 - Dec 2023</p>
                  <p><i className="fa-solid fa-angles-right"></i>Served as a Student Tutor in the course &quot;Programming Language&quot; for four consecutive semesters.</p>
                  <p><i className="fa-solid fa-angles-right"></i>Provided essential support to faculty during lab sessions by offering guidance and assistance to students.</p>
                  <p><i className="fa-solid fa-angles-right"></i>Mentored numerous students in their course-related studies, offering consultations and problem-solving sessions.</p>
                </div>
              </div>
              <div className="experience-item">
                <div className="icon-bullet"><i className="fas fa-laptop-code"></i></div>
                <div>
                  <h7>Co-Founder <a href='https://www.facebook.com/GameQart/' target="_blank"><span className='place'>   @ GameQart</span></a></h7><br></br>
                  <p className='timeline'>2019 - 2022</p>
                  <p><i className="fa-solid fa-angles-right"></i>Initiated and propelled the startup alongside a team of three friends, leveraging our collective skills.</p>
                  <p><i className="fa-solid fa-angles-right"></i>Spearheaded technical operations and oversaw product management, website maintenance, and page upkeep.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Resume;
