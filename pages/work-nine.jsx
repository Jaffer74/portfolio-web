import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import Layout from "../src/layouts/Layout";
const WorkNineIsotope = dynamic(
  () => import("../src/components/WorkNineIsotope"),
  {
    ssr: false,
  }
);
const WorkNine = () => {
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
              <span>
              Real-time Sales Data Analysis using Distributed Tools: An Implementation of Apache Distributed Tools</span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>Big Data Analytics  </span>
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
                      <span>2023</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Technology:</span>
                    <strong>
                      <span> Apache Spark, Hadoop, Kafka, Distributed Computing, Real-time Data Processing,E-commerce Analytics </span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Categories:</span>
                    <strong>
                      <span>Big Data Analytics   </span>
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                <a
                  target="_blank"
                  href="https://github.com/Jaffer74/Real-time-sales-data-analysis-using-distributed-tools-An-implementation-of-Apache-Distributed-tools"
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
                "url(https://media.licdn.com/dms/image/v2/D5612AQFAw7ykC0TVhg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1721181233355?e=1740009600&v=beta&t=u6aJFLCvsX6RvifjeZZeXWwAmzKCLq2KlLSUE-Jop_k)",
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
                This project focuses on utilizing distributed computing to enhance the efficiency and speed of real-time data analysis for customer purchase data on e-commerce platforms. By leveraging Apache Spark, Hadoop, and Kafka, the system enables seamless data processing, storage, and message passing. The model ensures immediate updates to the sales dashboard with minimal delay, allowing for quick insights into customer behavior and trends.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                The system processes large volumes of data in real-time, providing valuable analytics for improving e-commerce experiences. The generated output graphs offer insights into customer shopping trends, enabling businesses to implement strategies that optimize the online shopping experience, improve sales performance, and enhance customer satisfaction.

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
          <WorkNineIsotope />
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
                By leveraging Apache distributed tools, the project significantly improves the ability to process and analyze real-time data, offering businesses immediate access to critical customer insights. This approach ensures scalability and cost-effectiveness, making it ideal for modern data-intensive applications like e-commerce.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                The integration of real-time analytics and interactive dashboards allows for quicker decision-making and better resource utilization, ultimately enhancing the customer experience. This solution sets the stage for advanced data-driven e-commerce strategies and personalized shopping experiences.
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
            <Link legacyBehavior href="/work-ten">
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
                  <span>Automated Leukemia Detection and Classification Using Deep Learning Technique</span>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default WorkNine;
