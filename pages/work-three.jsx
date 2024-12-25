import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import Layout from "../src/layouts/Layout";
const WorkThreeIsotope = dynamic(
  () => import("../src/components/WorkThreeIsotope"),
  {
    ssr: false,
  }
);
const WorkThree = () => {
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
              <span>Real-Time Traffic Prediction and Optimization using Machine Learning</span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>AI ML Solutions, Full Stack Development</span>
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
                      <span>Machine Learning, Python, Scikit-Learn, Flask, API's, Streamlit</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Categories:</span>
                    <strong>
                      <span>Full Stack Development, AI ML Solutions</span>
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                <a
                  target="_blank"
                  href="https://github.com/Jaffer74/Real-Time-Traffic-Prediction-and-Optimization-System-"
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
                "url(https://media.licdn.com/dms/image/v2/D5612AQGORbPjBow1Zg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1711689332192?e=2147483647&v=beta&t=AQDn4SwR_ssT2793ACIwarmOqOIdvEQEgv3uQHA3fvw)",
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
                The Real-Time Traffic Prediction and Optimization System leverages machine learning to predict traffic congestion and optimize signal timings in urban areas. The system uses real-time data from traffic APIs such as GraphHopper and Meteomatics to provide accurate congestion forecasts and route recommendations. A user-friendly Streamlit dashboard visualizes traffic patterns, enhancing decision-making for urban traffic management.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                The system also offers actionable insights on traffic flow and potential bottlenecks, which can help reduce overall congestion. By optimizing signal timings and routing suggestions, the platform aims to improve urban mobility, reduce fuel consumption, and enhance commuter experience in real-time.
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
          <WorkThreeIsotope />
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
                This system offers a data-driven solution to urban traffic problems, using machine learning and real-time data for efficient traffic management. It highlights the power of predictive analytics in improving urban infrastructure and sustainability.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                With the ability to optimize traffic flow and reduce congestion, the system sets the foundation for smarter, more efficient cities. Its adaptability to various urban settings makes it a valuable tool for modern urban planners and traffic managers.
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
            <Link legacyBehavior href="/work-four">
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
                  <span>Autonomous Firefighting Robot with Enhanced Detection and Communication</span>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default WorkThree;
