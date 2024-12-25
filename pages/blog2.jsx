import Link from "next/link";
import Layout from "../src/layouts/Layout";
const Blog2 = () => {
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
              <span> Our Blogs </span>
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
                    <Link legacyBehavior href="/blog-four">
                      <a>
                        <img
                          src="assets/images/L2.jpg"
                          alt="The Leadership Mindset: Lessons Learned from Team Collaboration"
                          loading="lazy"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>September 19, 2024</span>
                    </div>
                    <h5 className="lui-title">
                      <Link legacyBehavior href="/blog-four">
                        <a>The Leadership Mindset: Lessons Learned from Team Collaboration</a>
                      </Link>
                    </h5>
                    <div className="lui-text">
                      <p>
                      Leadership is not just about titles or roles—it’s about the ability to inspire, 
                      collaborate, and adapt in dynamic environments. In this blog, I reflect on my journey of 
                      developing a leadership mindset through real-world team collaboration experiences, shedding 
                      light on lessons …{" "}
                      </p>
                      <div className="readmore">
                        <Link legacyBehavior href="/blog-four">
                          <a className="lnk">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pager">
              <a className="previous page-numbers" href="/blog">
                  1
                </a>
                <span className="page-numbers current">2</span>
                <a className="page-numbers" href="#">
                  3
                </a>
                <a className="next page-numbers" href="#">
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
                              <Link legacyBehavior href="/blog-four">
                                <a>September 2024</a>
                              </Link>
                            </li>
                            <li>
                              <Link legacyBehavior href="/blog-single">
                                <a>October 2024</a>
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
                              <Link legacyBehavior href="/blog-four">
                                <a>Personal Growth</a>
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
export default Blog2;
