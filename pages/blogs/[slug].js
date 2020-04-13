import Head from "next/head";
import Link from "next/link";
import Router, { withRouter } from "next/router";
import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import { singleBlog, listRelated } from "../../actions/blog";
import { getCategories } from "../../actions/category";
import { getTags } from "../../actions/tag";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import renderHTML from "react-render-html";
import moment from "moment";
// import SmallCard from "../../components/blog/SmallCard";
import DisqusThread from "../../components/DisqusThread";
// import Search from "../../components/blog/Search";
import NewCard from "../../components/blog/NewCard";
// for like
// import { getCookie, isAuth } from "../../actions/auth";
import { listPopular } from "../../actions/blog";

import {
  FacebookShareButton,
  FacebookIcon,
  FacebookShareCount,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  // EmailShareButton,
  // EmailIcon,
  // WhatsappShareButton,
  // WhatsappIcon
} from "react-share";

const SingleBlog = ({ blog, query, router }) => {
  const [related, setRelated] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  const [popular, setPopular] = useState([]);

  const initPopular = () => {
    listPopular().then((data) => {
      if (data.error) {
        console.log(error);
      } else {
        setPopular(data);
      }
    });
  };

  const initCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };
  const initTags = () => {
    getTags().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setTags(data);
      }
    });
  };

  const loadRelated = () => {
    listRelated({ blog }).then((data) => {
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
    initCategories();
    initTags();
    initPopular();
    // initLike();
  }, []);

  // undefined and error on front end, getting photo becomes error
  const showPopularBlogs = () => {
    return popular.map((blog, i) => (
      <li key={i}>
        <Link href={`/blogs/${blog.slug}`} key={i}>
          <a>
            <img
              // style={{ width: "100%" }}
              className="mr-4"
              src={`${API}/blog/photo/${blog.slug}`}
              alt={blog.title}
            />
            <div className="text">
              <h4 className="text-dark">{blog.title}</h4>
              <div className="post-meta">
                <span className="mr-2">
                  {moment(blog.createdAt).format("MMMM D, YYYY")}
                </span>
              </div>
            </div>
          </a>
        </Link>
      </li>
    ));
  };

  const showAllCategories = () => {
    return categories.map((c, i) => (
      <li key={i}>
        <Link href={`/categories/${c.slug}`} key={i}>
          <a>{c.name}</a>
        </Link>
      </li>
    ));
  };

  const showAllTags = () => {
    return tags.map((t, i) => (
      <li key={i}>
        <Link href={`/tags/${t.slug}`} key={i}>
          <a className="">{t.name}</a>
        </Link>
      </li>
    ));
  };

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

  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <span className="post-category text-white bg-warning mr-2">
          {c.name}
        </span>
      </Link>
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <span className="post-category text-white bg-success mr-2">
          #{t.name}
        </span>
      </Link>
    ));

  const showRelatedBlog = () => {
    return related.map((blog, i) => (
      <div className="col-md-4" key={i}>
        <article>
          <NewCard blog={blog} />
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
            {(count) => count}
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
        <div
          className="site-cover site-cover-sm same-height overlay single-page"
          style={{
            background: `url(${API}/blog/photo/${blog.slug})`,
          }}
        >
          <div className="container">
            <div className="row same-height justify-content-center">
              <div className="col-md-12 col-lg-10">
                <div className="post-entry text-center">
                  {showBlogCategories(blog)}
                  <h1 className="mb-4 text-light">{blog.title}</h1>
                  <div className="post-meta align-items-center text-center">
                    <figure className="author-figure mb-0 mr-3 d-inline-block">
                      <img
                        className="img-fluid rounded-circle"
                        src={`${API}/user/photo/${blog.postedBy.username}`}
                        alt="Generic placeholder image"
                        onError={(i) =>
                          (i.target.src = "/static/images/avatar.jpg")
                        }
                        style={{ width: "50px", height: "50px" }}
                      />
                    </figure>
                    <span className="d-inline-block mt-1">
                      By{" "}
                      <Link href={`/profile/${blog.postedBy.username}`}>
                        <a>{blog.postedBy.username} </a>
                      </Link>
                    </span>
                    <span>
                      {" "}
                      - {moment(blog.updatedAt).format("MMMM D, YYYY")}
                    </span>
                    <div className="mt-3">{showReactShareIcons()}</div>
                    <div className="mt-3 text-light">{blog.views} Views</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="singleblog-section py-lg">
          <div className="container">
            <div className="row blog-entries element-animate">
              <div className="col-md-12 col-lg-8 main-content">
                <div className="post-content-body text-dark">
                  {renderHTML(blog.body)}
                  <div className="row mb-5 mt-5">
                    <div className="col-md-12 mb-4">
                      <img
                        src={`${API}/blog/photo/${blog.slug}`}
                        alt={blog.title}
                        style={{ width: "100%" }}
                        className="img-fluid rounded"
                      />
                    </div>
                  </div>
                </div>
                <div className="pt-3">
                  Categories: {showBlogCategories(blog)}
                  Tags: {showBlogTags(blog)}
                </div>
                <div className="pt-5">
                  <div className="col">
                    <h5 className="text-left text-uppercase pt-3 pb-2 text-dark">
                      Written By
                    </h5>
                    <div className="media">
                      <img
                        className="mr-3 img-fluid rounded-circle"
                        src={`${API}/user/photo/${blog.postedBy.username}`}
                        alt="Generic placeholder image"
                        onError={(i) =>
                          (i.target.src = "/static/images/avatar.jpg")
                        }
                        style={{ width: "50px", height: "50px" }}
                      />
                      <div className="media-body">
                        <h5 className="mt-0">
                          {" "}
                          <Link href={`/profile/${blog.postedBy.username}`}>
                            <a>{blog.postedBy.username}</a>
                          </Link>
                        </h5>
                        {blog.postedBy.about}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4 sidebar">
                <div className="sidebar-box">
                  <h3 className="heading text-dark">Popular Posts</h3>
                  <div className="post-entry-sidebar">
                    <ul>{showPopularBlogs()}</ul>
                  </div>
                </div>
                <div className="sidebar-box">
                  <h3 className="heading text-dark">Categories</h3>
                  <ul className="categories">{showAllCategories()}</ul>
                </div>

                <div className="sidebar-box">
                  <h3 className="heading text-dark">Tags</h3>
                  <ul className="tags">{showAllTags()}</ul>
                </div>
              </div>
              <div className="container">
                <h1 className="text-center pt-5 text-dark">Related blogs</h1>
                <hr />
                <div className="row">{showRelatedBlog(blog)}</div>
              </div>

              <div className="container pt-5 pb-5">{showComments()}</div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

SingleBlog.getInitialProps = ({ query }) => {
  return singleBlog(query.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      // console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
      return { blog: data, query };
    }
  });
};

export default withRouter(SingleBlog);
