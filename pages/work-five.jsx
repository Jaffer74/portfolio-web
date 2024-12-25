import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import Layout from "../src/layouts/Layout";
const WorkFiveIsotope = dynamic(
  () => import("../src/components/WorkFiveIsotope"),
  {
    ssr: false,
  }
);
const WorkFive = () => {
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
              E-Commerce Product Recommendation Engine: Enhancing Customer Online Shopping Experience</span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>Big data analytics , AI ML Solutions </span>
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
                      <span>Machine Learning, Python, PySpark, SQL, Flask, Scikit-learn, Collaborative Filtering</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Categories:</span>
                    <strong>
                      <span>AI ML Solutions ,Big data analytics  </span>
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                <a
                  target="_blank"
                  href="https://github.com/Jaffer74/E-Commerce-Product-Recommendation-Engine-Enhancing-Customer-Online-Shopping-Experience"
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
                "url(https://calbizjournal.com/wp-content/uploads/2024/07/eCommerce-website-search-customer-experience.jpg)",
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
                The E-Commerce Product Recommendation Engine leverages machine learning and collaborative filtering techniques to personalize product suggestions for online shoppers. By analyzing customer behavior and purchase history, the system generates accurate product recommendations, improving the shopping experience and increasing sales. The engine processes large datasets using PySpark and applies various recommendation algorithms like KNN, SVD, and NMF.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                This system integrates seamlessly with e-commerce platforms, offering real-time recommendations and reducing the impact of data sparsity and cold-start problems. By delivering personalized product suggestions, it boosts user satisfaction and helps businesses optimize their sales strategies.


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
          <WorkFiveIsotope />
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
                This recommendation engine offers a powerful solution for enhancing the customer shopping experience by delivering tailored product suggestions. Its ability to handle large datasets and provide real-time, relevant recommendations makes it a valuable tool for e-commerce platforms.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                The engine demonstrates the practical applications of machine learning in e-commerce, showcasing how personalized recommendations can drive customer engagement and improve sales performance. It sets the stage for more advanced systems that can further optimize online shopping experiences.
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
            <Link legacyBehavior href="/work-six">
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
                  <span>Helix Jump: A Unity 3D Game with Machine Learning Integration</span>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default WorkFive;
