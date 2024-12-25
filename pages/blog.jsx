import Link from "next/link";
import Layout from "../src/layouts/Layout";
const Blog = () => {
  return (
    <Layout>
      {/* Section Started Heading */}
      <section className="section section-inner started-heading">
        <div className="container">
          {/* Heading */}
          <div className="m-titles align-center">
            <h1
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> My Blogs </span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Recent Articles </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Blog */}
      <div className="section section-inner m-archive">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              {/* Blog Items */}
              <div className="articles-container">
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <Link legacyBehavior href="/blog-single">
                      <a>
                        <img
                          src="assets/images/tools.jpg"
                          alt="Top AI Tools Every Aspiring Developer Should Know"
                          loading="lazy"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>October 31, 2024</span>
                    </div>
                    <h5 className="lui-title">
                      <Link legacyBehavior href="/blog-single">
                        <a>Top AI Tools Every Aspiring Developer Should Know</a>
                      </Link>
                    </h5>
                    <div className="lui-text">
                      <p>
                      Artificial Intelligence is revolutionizing every industry, 
                      and having the right tools can significantly enhance your 
                      development journey. Whether you're building machine learning 
                      models, deploying AI solutions, …{" "}
                      </p>
                      <div className="readmore">
                        <Link legacyBehavior href="/blog-single">
                          <a className="lnk">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <Link legacyBehavior href="/blog-two">
                      <a>
                        <img
                          src="assets/images/genai.jpg"
                          alt="The Rise of Generative AI: What Developers Need to Know"
                          loading="lazy"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>December 3, 2024</span>
                    </div>
                    <h5 className="lui-title">
                      <Link legacyBehavior href="/blog-two">
                        <a>The Rise of Generative AI: What Developers Need to Know</a>
                      </Link>
                    </h5>
                    <div className="lui-text">
                      <p>
                      Generative AI is quickly becoming the next frontier in artificial 
                      intelligence, with the potential to revolutionize industries from 
                      content creation to software development…{" "}
                      </p>
                      <div className="readmore">
                        <Link legacyBehavior href="/blog-two">
                          <a className="lnk">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <Link legacyBehavior href="/blog-three">
                      <a>
                        <img
                          src="assets/images/bgcloud.png"
                          alt="Choosing the Right Cloud Service for Your Machine Learning Workload"
                          loading="lazy"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>December 15, 2024</span>
                    </div>
                    <h5 className="lui-title">
                      <Link legacyBehavior href="/blog-three">
                        <a>Choosing the Right Cloud Service for Your Machine Learning Workload</a>
                      </Link>
                    </h5>
                    <div className="lui-text">
                      <p>
                      With the rapid growth of machine learning (ML), 
                      choosing the right cloud service to run your ML 
                      workloads has never been more important. As companies 
                      move towards AI-driven solutions…{" "}
                      </p>
                      <div className="readmore">
                        <Link legacyBehavior href="/blog-three">
                          <a className="lnk">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pager">
                <span className="page-numbers current">1</span>
                <a className="page-numbers" href="/blog2">
                  2
                </a>
                <a className="next page-numbers" href="/blog2">
                  Next
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              {/* sidebar */}
              <div
                className="col__sedebar scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="content-sidebar">
                  <aside className="widget-area">
                    <div className="widget widget_block widget_search">
                      <form
                        onSubmit={(e) => e.preventDefault()}
                        className="wp-block-search"
                      >
                        <div className="wp-block-search__inside-wrapper">
                          <input
                            type="search"
                            className="wp-block-search__input wp-block-search__input"
                            defaultValue=""
                          />
                          <button
                            type="submit"
                            className="wp-block-search__button wp-element-button"
                          >
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                    <section className="widget widget_block">
                      <div className="wp-block-group">
                        <div className="wp-block-group__inner-container">
                          <h2>Recent Posts</h2>
                          <ul className="wp-block-latest-posts__list wp-block-latest-posts">
                            <li>
                              <Link legacyBehavior href="/blog-single">
                                <a className="wp-block-latest-posts__post-title">
                                Top AI Tools Every Aspiring Developer Should Know
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link legacyBehavior href="/blog-two">
                                <a className="wp-block-latest-posts__post-title">
                                The Rise of Generative AI: What Developers Need to Know
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link legacyBehavior href="/blog-three">
                                <a className="wp-block-latest-posts__post-title">
                                Choosing the Right Cloud Service for Your Machine Learning Workload
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link legacyBehavior href="/blog-four">
                                <a className="wp-block-latest-posts__post-title">
                                The Leadership Mindset: Lessons Learned from Team Collaboration
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link legacyBehavior href="/blog-single">
                                <a className="wp-block-latest-posts__post-title">
                                  10 Useful Tips to Improve Your Skills
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </section>
                  
                    <section className="widget widget_block">
                      <div className="wp-block-group">
                        <div className="wp-block-group__inner-container">
                          <h2>Archives</h2>
                          <ul className="wp-block-archives-list wp-block-archives">
                            <li>
                              <Link legacyBehavior href="/blog-single">
                                <a>October 2024</a>
                              </Link>
                            </li>
                            <li>
                              <Link legacyBehavior href="/blog-three">
                                <a>December 2024</a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </section>
                    <section className="widget widget_block">
                      <div className="is-layout-flow wp-block-group">
                        <div className="wp-block-group__inner-container">
                          <h2>Categories</h2>
                          <ul className="wp-block-categories-list wp-block-categories">
                            <li className="cat-item cat-item-2">
                              <Link legacyBehavior href="/blog-single">
                                <a>AI</a>
                              </Link>
                            </li>
                            <li className="cat-item cat-item-3">
                              <Link legacyBehavior href="/blog-two">
                                <a>Gen AI</a>
                              </Link>
                            </li>
                            <li className="cat-item cat-item-4">
                              <Link legacyBehavior href="/blog-three">
                                <a>Cloud </a>
                              </Link>
                            </li>
                            <li className="cat-item cat-item-5">
                              <Link legacyBehavior href="/blog-single">
                                <a>UX Personal Growth</a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </section>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          <div className="v-line-left v-line-top">
            <div className="v-line-block">
              <span />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Blog;
