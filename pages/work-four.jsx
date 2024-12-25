import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import Layout from "../src/layouts/Layout";
const WorkFourIsotope = dynamic(
  () => import("../src/components/WorkFourIsotope"),
  {
    ssr: false,
  }
);
const WorkFour = () => {
  const [videoToggle, setVideoToggle] = useState(false);
  return (
    <Layout pageClassName={"portfolio-template"}>
      {/* Section Started Heading */}
      <section className="section section-inner started-heading">
        {/* Heading */}
        <div className="container">
          <div className="m-titles align-left">
            <h1
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>Autonomous Firefighting Robot with Enhanced Detection and Communication</span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>Robotics, AI ML Solutions</span>
            </div>
          </div>
        </div>
        {/* Details */}
        <div className="v-line v-line-right v-line-top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <div className="m-details">
                  <div className="details-label">
                    <span>Year:</span>
                    <strong>
                      <span>2024</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Technology:</span>
                    <strong>
                      <span>Robotics, IoT, Python, Arduino, Sensors and Motors</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Categories:</span>
                    <strong>
                      <span>Robotics, AI ML Solutions</span>
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                <a
                  target="_blank"
                  href="https://github.com/Jaffer74/Autonomous-Firefighting-Robot-with-Enhanced-Detection-and-Communication-"
                  className="btn scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span>Click here for details !</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Image */}
      <div className="section section-inner">
        {/* Image */}
        <div className="m-image-large">
          <div className="image">
            <div
              className="img js-parallax"
              style={{
                backgroundImage:
                "url(https://img.freepik.com/premium-photo/autonomous-firefighting-robot-navigating_976492-129162.jpg)",
            }}
            />
          </div>
        </div>
      </div>
      {/* Section - Description */}
      <section className="section section-inner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="post-content">
                <h4>Description</h4>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
              <p>
                The Autonomous Firefighting Robot with Enhanced Detection and Communication integrates IoT and robotics to autonomously detect and combat fires. The robot is equipped with infrared and gas sensors to quickly detect heat and gas leaks, ensuring early identification of fire hazards. A servo-controlled water pump is used for fire suppression, enabling rapid response to fire outbreaks.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                The system also features real-time communication with emergency responders via a GSM module, enhancing safety and coordination during firefighting operations. By combining these technologies, the robot addresses limitations of traditional firefighting systems, improving response times and safety in hazardous environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Gallery */}
      <div className="section section-inner">
        <div className="container">
          {/* Section Gallery */}
          <WorkFourIsotope />
        </div>
      </div>
      {/* Section - Description */}
      <section className="section section-inner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="post-content">
                <h4>Conclusion</h4>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
              <p>
                This autonomous firefighting robot demonstrates the potential of combining robotics and IoT to enhance safety in emergency situations. It provides a fast, efficient solution for detecting fires and mitigating damage, with real-time communication capabilities for improved coordination.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                The integration of advanced sensors and communication systems in firefighting applications represents a significant step forward in enhancing emergency response capabilities. This system has the potential to save lives and reduce property damage by responding to fires in their early stages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Navigation */}
      <div className="section section-inner m-page-navigation">
        <div className="container">
          <div className="h-titles h-navs">
            <Link legacyBehavior href="/work-five">
              <a>
                <span
                  className="nav-arrow scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span>Next Project</span>
                </span>
                <span
                  className="h-title splitting-text-anim-2 scroll-animate"
                  data-splitting="chars"
                  data-animate="active"
                >
                  <span>E-Commerce Product Recommendation Engine: Enhancing Customer Online Shopping Experience</span>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default WorkFour;
