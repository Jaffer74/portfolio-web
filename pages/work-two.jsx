import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import Layout from "../src/layouts/Layout";
const WorkTwoIsotope = dynamic(
  () => import("../src/components/WorkTwoIsotope"),
  {
    ssr: false,
  }
);
const WorkTwo = () => {
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
              <span>Enhancing Customer Satisfaction Using AWS-Driven AI Chatbot for Restaurant Ordering</span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>Cloud Computing</span>
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
                      <span>AWS, NLP, Python, Chatbot Framework</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Categories:</span>
                    <strong>
                      <span>Cloud Computing</span>
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                <a
                  target="_blank"
                  href="https://github.com/Jaffer74/AI-Driven-Chatbot-for-Enhanced-Restaurant-Ordering"
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
                  "url(https://www.streebo.com/wp-content/themes/streebo/images/Food-and-Beverage-Industry-with-Generative-AI-angle/img2.png)",
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
                The AI-Driven Chatbot for Enhanced Restaurant Ordering is a sophisticated platform that streamlines the ordering process using AI and NLP. Customers can interact seamlessly with the chatbot to place orders, access menu recommendations, and receive personalized suggestions. The integration of image recognition allows visual menu-based ordering for an intuitive experience.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                Built on AWS, the solution leverages scalable cloud technologies and real-time processing to ensure responsiveness and reliability. With its user-centric design, the chatbot significantly reduces ordering time while enhancing customer satisfaction and engagement.
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
          <WorkTwoIsotope />
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
                This project represents a pivotal step in automating restaurant services, combining AI, NLP, and cloud technologies to deliver a seamless user experience. By addressing common challenges in order management, it boosts efficiency and improves the overall dining experience for customers and restaurant staff alike.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                By integrating advanced features like image recognition and menu recommendations, the chatbot demonstrates the potential of AI in transforming the food industry. Its scalable architecture and user-friendly interface make it a valuable solution for modern restaurant operations.
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
            <Link legacyBehavior href="/work-three">
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
                  <span>Real-Time Traffic Prediction and Optimization using Machine Learning</span>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default WorkTwo;
