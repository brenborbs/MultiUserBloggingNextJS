import Head from "next/head";
import Link from "next/link";
import Router, { withRouter } from "next/router";
import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import { singleBlog, listRelated } from "../../actions/blog";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import renderHTML from "react-render-html";
import moment from "moment";
import SmallCard from "../../components/blog/SmallCard";
import DisqusThread from "../../components/DisqusThread";
import Search from "../../components/blog/Search";
// for like
import { getCookie, isAuth } from "../../actions/auth";

import {
  FacebookShareButton,
  FacebookIcon,
  FacebookShareCount,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon
  // EmailShareButton,
  // EmailIcon,
  // WhatsappShareButton,
  // WhatsappIcon
} from "react-share";

const SingleBlog = ({ blog, query, router }) => {
  const [related, setRelated] = useState([]);

  const loadRelated = () => {
    listRelated({ blog }).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setRelated(data);
        // setValues({ like: checkLike(data.likes), likes: data.likes.length });
      }
    });
  };
  // load state related blogs
  useEffect(() => {
    loadRelated();
    // initLike();
  }, []);

  const head = () => (
    <Head>
      <title>
        {blog.title} | {APP_NAME}
      </title>
      <meta name="description" content={blog.mdesc} />
      <link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`} />
      <meta property="og:title" content={`${blog.title}| ${APP_NAME}`} />
      <meta property="og:description" content={blog.mdesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
      <meta
        property="og:image:secure_url"
        ccontent={`${API}/blog/photo/${blog.slug}`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  const showBlogCategories = blog =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a className="tag category">{c.name}</a>
      </Link>
    ));

  const showBlogTags = blog =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="tag tags">{t.name}</a>
      </Link>
    ));

  const showRelatedBlog = () => {
    return related.map((blog, i) => (
      <div className="col-md-4" key={i}>
        <article>
          <SmallCard blog={blog} />
        </article>
      </div>
    ));
  };

  const showComments = () => {
    return (
      <div>
        <DisqusThread
          id={blog._id}
          title={blog.title}
          path={`/blog/${blog.slug}`}
        />
      </div>
    );
  };

  const showReactShareIcons = () => {
    return (
      <div className="Demo__container">
        <div className="Demo__some-network">
          <FacebookShareButton
            url={`${API}/blog/${blog.slug}`}
            quote={blog.title}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round={false} />
          </FacebookShareButton>
          <FacebookShareCount
            url={`${API}/blog/${blog.slug}`}
            className="Demo__some-network__share-count"
          >
            {count => count}
          </FacebookShareCount>
        </div>
        <div className="Demo__some-network">
          <TwitterShareButton
            url={`${API}/blog/${blog.slug}`}
            quote={blog.title}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={32} round={false} />
          </TwitterShareButton>
        </div>
        <div className="Demo__some-network">
          <LinkedinShareButton
            url={`${API}/blog/${blog.slug}`}
            windowWidth={750}
            windowHeight={600}
            className="Demo__some-network__share-button"
          >
            <LinkedinIcon size={32} round={false} />
          </LinkedinShareButton>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <main>
          <section id="article">
            <div className="container-bg">
              <div className="page-container">
                <article className="card-bg">
                  <img
                    src={`${API}/blog/photo/${blog.slug}`}
                    alt={blog.title}
                    style={{ width: "100%" }}
                  />
                  <h1 className="l-header pt-2">{blog.title}</h1>
                  <div className="">
                    <small>
                      <Link href={`/profile/${blog.postedBy.username}`}>
                        <a>{blog.postedBy.username}</a>
                      </Link>{" "}
                      | Published on{" "}
                      {moment(blog.updatedAt).format("dddd MMMM D, YYYY")}
                    </small>
                    {/* <div class="category category-ent">Category here!</div> */}
                  </div>
                  <div className="pt-3">{showReactShareIcons()}</div>
                  <hr />
                  <div>{renderHTML(blog.body)}</div>
                  {showBlogCategories(blog)}
                  {showBlogTags(blog)}
                </article>
                <aside
                // id="categories" className="card-bg"
                >
                  <Search />
                  {/* <h2>Categories</h2> 
                  <ul className="list">
                    <li>
                      <a href="" className="fa fa-chevron-right"></a>Sports
                    </li>
                    <li>
                      <a href="" className="fa fa-chevron-right"></a>
                      Entertainment
                    </li>
                    <li>
                      <a href="" className="fa fa-chevron-right"></a>Technology
                    </li>
                    <li>
                      <a href="" className="fa fa-chevron-right"></a>Fashion
                    </li>
                    <li>
                      <a href="" className="fa fa-chevron-right"></a>Fashion
                    </li>
                  </ul> */}
                </aside>
                <aside className="card-bg bg-secondary">
                  {isAuth() ? (
                    <>
                      <h2>Start Writing</h2>
                      <p>You can search for inspiration everywhere!</p>
                      <Link href="/admin">
                        <a className="btn btn-dark btn-block">Write a blog</a>
                      </Link>
                    </>
                  ) : (
                    <>
                      <h2>Join Our Blog</h2>
                      <p>Channel your inner feelings and fly!</p>
                      <Link href="/signup">
                        <a className="btn btn-dark btn-block">Register</a>
                      </Link>
                    </>
                  )}
                </aside>
              </div>
              <div className="container">
                <h1 className="text-center pt-5 text-caveat">Related blogs</h1>
                <hr />
                <div className="row">{showRelatedBlog()}</div>
              </div>

              <div className="container pt-5 pb-5">{showComments()}</div>
            </div>
          </section>
        </main>
      </Layout>
      <style jsx>{``}</style>
    </React.Fragment>
  );
};

SingleBlog.getInitialProps = ({ query }) => {
  return singleBlog(query.slug).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      // console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
      return { blog: data, query };
    }
  });
};

export default withRouter(SingleBlog);
