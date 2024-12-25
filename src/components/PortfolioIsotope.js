import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const PortfolioIsotope = ({ noViewMore }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="works-box">
        <div
          className="filter-links scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <a
            className={`c-pointer lui-subtitle ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".works-col"
          >
            All
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-ai-ml-solutions"
            )}`}
            onClick={handleFilterKeyChange("sorting-ai-ml-solutions")}
            data-href=".sorting-ai-ml-solutions"
          >
            AI ML Solutions
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-cloud-computing"
            )}`}
            onClick={handleFilterKeyChange("sorting-cloud-computing")}
            data-href=".sorting-cloud-computing"
          >
            Cloud Computing
          </a>

          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-full-stack-development"
            )}`}
            onClick={handleFilterKeyChange("sorting-full-stack-development")}
            data-href=".sorting-full-stack-development"
          >
            Full Stack Development
          </a>


          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-big-data-analytics"
            )}`}
            onClick={handleFilterKeyChange("sorting-big-data-analytics")}
            data-href=".sorting-big-data-analytics"
          >
            Big Data Analytics
          </a>
        </div>

        <div className="works-items works-masonry-items row">
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-ai-ml-solutions sorting-full-stack-development ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/ki.png"
                        alt="Real-Time EV Fleet Monitoring and Predictive Analytics Solution"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> AI ML Solutions, Full Stack Development </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single">
                    <a>Real-Time EV Fleet Monitoring and Predictive Analytics Solution</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Developed a real-time system to monitor EV fleets and predict maintenance 
                  needs using advanced analytics. Optimized fleet operations with data-driven insights.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-cloud-computing  ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-two">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/bot1.jpg"
                        alt="Enhancing Customer Satisfaction Using AWS-Driven AI Chatbots for Restaurant Ordering"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Cloud Computing </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-two">
                    <a>Enhancing Customer Satisfaction Using AWS-Driven AI Chatbots for Restaurant Ordering</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Designed an AI chatbot using AWS to streamline restaurant 
                  ordering and improve customer satisfaction by 90%.
                  </p>
                </div>
                <Link legacyBehavior href="/work-two">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-ai-ml-solutions sorting-full-stack-development ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-three">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/traffic.png"
                        alt="Real-Time Traffic Prediction and Optimization using Machine Learning"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> AI ML Solutions, Full Stack Development </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-three">
                    <a>Real-Time Traffic Prediction and Optimization using Machine Learning</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Built a machine learning model to predict traffic congestion and for better urban mobility. 
                  And visualized real-time traffic data through a dynamic dashboard.
                  </p>
                </div>
                <Link legacyBehavior href="/work-three">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-ai-ml-solutions ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-four">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/robof.jpg"
                        alt="Autonomous Firefighting Robot with Enhanced Detection and Communication"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Robotics, AI ML Solutions</span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-four">
                    <a>Autonomous Firefighting Robot with Enhanced Detection and Communication</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Built an autonomous firefighting robot with IoT sensors for fire detection and real-time communication with emergency responders.
                  </p>
                </div>
                <Link legacyBehavior href="/work-four">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-ai-ml-solutions sorting-big-data-analytics ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-five">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/cmm.jpg"
                        alt="E-Commerce Product Recommendation Engine: Enhancing Customer Online Shopping Experience"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Big data analytics , AI ML Solutions </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-five">
                    <a>E-Commerce Product Recommendation Engine: Enhancing Customer Online Shopping Experience</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Developed a scalable recommendation system using collaborative filtering for personalized shopping. Processed 7M+ interactions for real-time suggestions.
                  </p>
                </div>
                <Link legacyBehavior href="/work-five">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-ai-ml-solutions ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-six">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/game.jpg"
                        alt="Helix Jump: A Unity 3D Game with Machine Learning Integration"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Game Development , AI ML Solutions </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-six">
                    <a>Helix Jump: A Unity 3D Game with Machine Learning Integration</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Developed a 3D Unity game with dynamic gameplay and machine learning for adaptive difficulty. Enhanced user experience with AI-driven features.
                  </p>
                </div>
                <Link legacyBehavior href="/work-six">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-ai-ml-solutions sorting-big-data-analytics ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-seven">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/eye.png"
                        alt="Detecting Retinal Damage From OCT Images"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> AI ML Solutions , Big Data Analytics </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-seven">
                    <a>Detecting Retinal Damage From OCT Images</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Developed a CNN-based model for detecting retinal diseases from OCT images, achieving over 92% accuracy for early disease detection.
                  </p>
                </div>
                <Link legacyBehavior href="/work-seven">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12   ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-eight">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/vehicle_i.png"
                        alt="Enhancing Service Excellence in Vehicular Ad Hoc Networks (VANETs)"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Networking </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-eight">
                    <a>Enhancing Service Excellence in Vehicular Ad Hoc Networks (VANETs)</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Improved vehicular network performance by designing an enhanced AODV protocol, reducing latency and increasing packet delivery.
                  </p>
                </div>
                <Link legacyBehavior href="/work-eight">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-big-data-analytics  ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-nine">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/apach.png"
                        alt="Real-time Sales Data Analysis using Distributed Tools: An Implementation of Apache Distributed Tools"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Big Data Analytics </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-nine">
                    <a>Real-time Sales Data Analysis using Distributed Tools: An Implementation of Apache Distributed Tools</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Built a distributed solution for real-time sales data analysis using Apache Spark, enabling businesses to make data-driven decisions.
                  </p>
                </div>
                <Link legacyBehavior href="/work-nine">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12   ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-ten">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/cvv.jpg"
                        alt="Automated Leukemia Detection and Classification Using Deep Learning Technique"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Computer Vision </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-ten">
                    <a>Automated Leukemia Detection and Classification Using Deep Learning Technique</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Created a deep learning model to classify blood cell images as healthy or leukemia-affected, achieving 98.22% accuracy through advanced model enhancements.
                  </p>
                </div>
                <Link legacyBehavior href="/work-ten">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
        </div>
       


        {!noViewMore && (
          <div className="load-more-link">
            <Link legacyBehavior href="/works">
              <a
                className="btn scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>View More</span>
              </a>
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
