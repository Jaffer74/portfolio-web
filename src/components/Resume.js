import { useState } from "react";

const educationData = [
  {
    id: 1,
    title: "Bachelor of Technology (B.Tech) [CSE]",
    academy: "Amrita Vishwa Vidyapeetham, Bangalore",
    dec: `Completed a challenging B.Tech in Computer Science and Engineering, 
    gaining expertise in software development, machine learning, and data structures. 
    Built a solid foundation in problem-solving, algorithm design, and full-stack development. 
    Applied theoretical knowledge to real-world projects, fostering a passion for innovation and technology.`,
    startYear: "2021",
    endYear: "2025",
  },
  {
    id: 2,
    title: "Higher Secondary Education (MPC)",
    academy: "Narayana Junior College, Hyderabad",
    dec: "Pursued Higher Secondary Education with a focus on Mathematics, Physics, and Chemistry, strengthening analytical and problem-solving skills critical for advanced studies in technology and engineering.",
    startYear: "2019",
    endYear: "2021",
  },
  {
    id: 3,
    title: "Secondary Education",
    academy: "SR Prime School, Warangal",
    dec: "Completed secondary education with a strong foundation in core subjects, including Mathematics, Science, and Languages, setting the stage for higher academic pursuits.",
    endYear: "2019",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Artificial Intelligence Intern",
    company: "Infosys Springboard",
    dec: `Worked as an AI Intern, where I contributed to developing and enhancing machine learning models.
Gained hands-on experience in data preprocessing, model training, and evaluation using popular AI frameworks.
Collaborated with cross-functional teams to integrate AI solutions for real-world applications,
and developed a strong understanding of AI techniques and their practical use cases.`,
    startYear: "November 2024",
    endYear: "January 2025",
  },
];


const Resume = () => {
  const [educationToggle, setEducationToggle] = useState(1);
  const [experienceToggle, setExperienceToggle] = useState(1);
  return (
    <section className="lui-section lui-gradient-bottom" id="resume-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Resume </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                my <b>Story</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="v-line v-line-left">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Education </span>
              </h5>
              <div className="history-items">
                {educationData.map((education, i) => (
                  <div
                    key={education.id}
                    className={`history-item lui-collapse-item scroll-animate ${
                      educationToggle === education.id ? "opened" : ""
                    }`}
                    data-animate="active"
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        educationToggle == education.id ? "active" : ""
                      }`}
                      onClick={() =>
                        setEducationToggle(
                          educationToggle == education.id ? null : education.id
                        )
                      }
                    >
                      <span> {education.academy} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {education.title} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {education.startYear} - {education.endYear}{" "}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{education.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Experience </span>
              </h5>
              <div className="history-items">
                {experienceData.map((experience) => (
                  <div
                    className={`history-item lui-collapse-item scroll-animate ${
                      experience.id == experienceToggle ? "opened" : ""
                    }`}
                    data-animate="active"
                    key={experience.id}
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        experienceToggle == experience.id ? " active" : ""
                      }`}
                      onClick={() => setExperienceToggle(experience.id)}
                    >
                      <span> {experience.title} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {experience.company} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {experience.startYear} -{" "}
                          {experience.endYear ? (
                            experience.endYear
                          ) : (
                            <b>Present</b>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{experience.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> History </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
