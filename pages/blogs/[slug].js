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
import NewCard from "../../components/blog/NewCard";
// for like
import { getCookie, isAuth } from "../../actions/auth";

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

  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a className="tag bg-warning">{c.name}</a>
      </Link>
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="tag bg-success">#{t.name}</a>
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
        <div className="container" style={{ paddingTop: "2rem" }}>
          <section id="article">
            {/* container-bg */}
            <div className="row">
              {/* page-container */}
              <div className="col-lg-8">
                <article className="card-bg">
                  <img
                    src={`${API}/blog/photo/${blog.slug}`}
                    alt={blog.title}
                    style={{ width: "100%" }}
                    className="img-fluid rounded"
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
                  Categories: {showBlogCategories(blog)}
                  Tags: {showBlogTags(blog)}
                </article>
                <div className="col">
                  <h5 className="text-left text-uppercase pt-5 pb-2">
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
              <div className="col-md-4">{/* Right side */}</div>
              <div className="container">
                <h1 className="text-center pt-5 text-caveat">Related blogs</h1>
                <hr />
                <div className="row">{showRelatedBlog(blog)}</div>
              </div>

              <div className="container pt-5 pb-5">{showComments()}</div>
            </div>
          </section>
        </div>
      </Layout>
      <style jsx>{``}</style>
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
