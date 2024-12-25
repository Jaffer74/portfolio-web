import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import Layout from "../src/layouts/Layout";
const WorkTenIsotope = dynamic(
  () => import("../src/components/WorkTenIsotope"),
  {
    ssr: false,
  }
);
const WorkTen = () => {
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
              Automated Leukemia Detection and Classification Using Deep Learning Technique</span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>Computer Vision  </span>
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
                      <span> Deep Learning, Convolutional Neural Networks (CNNs), Image Classification, Data Augmentation  </span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Categories:</span>
                    <strong>
                      <span>Computer Vision  </span>
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                <a
                  target="_blank"
                  href="https://github.com/Jaffer74/Automated-Leukemia-Detection-and-Classification-Using-Deep-Learning-Techniques"
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
                "url(https://www.mdpi.com/applsci/applsci-12-06317/article_deploy/html/images/applsci-12-06317-g001.png)",
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
                The Automated Leukemia Detection and Classification project uses deep learning techniques to automatically classify microscopic blood cell images as healthy (HEM) or leukemia-affected (ALL). By employing Convolutional Neural Networks (CNNs), specifically VGG16 and MobileNet models, the system accurately identifies different stages of leukemia from optical images of blood cells.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                The model is trained using data augmentation techniques to improve accuracy and prevent overfitting. The project highlights the power of transfer learning to enhance model performance, leveraging pretrained models for more efficient classification, while achieving high classification accuracy and robust performance in medical diagnostics.

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
          <WorkTenIsotope />
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
                This deep learning-based approach demonstrates the potential of CNNs in automating the classification of medical images, providing faster and more accurate diagnostics for leukemia. The use of transfer learning with models like VGG16 has proven to be highly effective, reducing the need for large datasets while maintaining excellent accuracy.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                By integrating these technologies, the system offers a reliable and scalable solution for medical professionals, allowing for early detection and more effective treatment planning. This approach has the potential to be expanded for other medical imaging tasks, ultimately improving healthcare outcomes through automation and AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* Section Navigation */}
        <div className="section section-inner m-page-navigation">
        <div className="container">
          <div className="navigation-row">
            <div className="previous-post">
              <Link legacyBehavior href="/">
                <a className="btn m-btn-next">Back to Home</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default WorkTen;
