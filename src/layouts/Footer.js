const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="social-links scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <a target="_blank" rel="nofollow" href="https://linkedin.com/in/mohammed-jaffer-ali-e0741">
                  <i aria-hidden="true" className="fab fa-linkedin" />
                </a>
                <a target="_blank" rel="nofollow" href="https://github.com/Jaffer74">
                  <i aria-hidden="true" className="fab fa-github" />
                </a>
                <a href="mailto:jafferali.0741@gmail.com">
                  <i aria-hidden="true" className="fas fa-envelope" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-center scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                © 2024 <strong>Mohammed Jaffer Ali</strong>. All rights reserved
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-right scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Developed by <strong>Mohammed Jaffer Ali</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
