import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import Layout from "../src/layouts/Layout";
const WorkEightIsotope = dynamic(
  () => import("../src/components/WorkEightIsotope"),
  {
    ssr: false,
  }
);
const WorkEight = () => {
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
              Enhancing Service Excellence in Vehicular Ad Hoc Networks (VANETs)</span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>Networking  </span>
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
                      <span>Vehicular Ad-Hoc Networks (VANETs), AODV Protocol, Networking, NS2 (Network Simulator 2) </span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Categories:</span>
                    <strong>
                      <span>Networking   </span>
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                <a
                  target="_blank"
                  href="https://github.com/Jaffer74/Enhancing-Service-Excellence-in-Vehicular-Ad-Hoc-Networks-VANETs-"
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
                "url(https://pub.mdpi-res.com/sensors/sensors-24-00818/article_deploy/html/images/sensors-24-00818-g001.png?1706264989)",
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
                This project focuses on enhancing service excellence in Vehicular Ad-Hoc Networks (VANETs) by optimizing the AODV protocol to improve Quality of Service (QoS). The proposed solution increases the packet delivery rate and reduces latency, ensuring more efficient communication between vehicles in dynamic environments. The system uses NS2 and OpenStreetMap for simulations to evaluate performance improvements in real-time scenarios.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                By modifying the AODV protocol with real-time location and node identity data, the model achieves a 15% improvement in packet delivery rate and a 20% reduction in latency. These optimizations contribute to safer and more efficient communication, essential for applications like autonomous driving and smart transportation.

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
          <WorkEightIsotope />
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
                The enhanced AODV protocol significantly improves the reliability and efficiency of VANETs, providing better communication for vehicles on the road. These improvements are critical for the development of smart city and autonomous driving technologies, where real-time data exchange is vital.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                The use of real-time location data and advanced QoS metrics further strengthens the robustness of the VANET system, ensuring reliable vehicle-to-vehicle communication. This work highlights the role of network optimization in the future of vehicular technologies, offering a foundation for next-generation transportation systems.
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
            <Link legacyBehavior href="/work-nine">
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
                  <span>Real-time Sales Data Analysis using Distributed Tools: An Implementation of Apache Distributed Tools</span>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default WorkEight;
