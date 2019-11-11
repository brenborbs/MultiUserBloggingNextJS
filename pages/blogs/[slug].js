import Head from "next/head";
import Link from "next/link";
import Router, { withRouter } from "next/router";
import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import { singleBlog, listRelated, like, unlike } from "../../actions/blog";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import renderHTML from "react-render-html";
import moment from "moment";
import SmallCard from "../../components/blog/SmallCard";
import DisqusThread from "../../components/DisqusThread";
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

  const [liked, setLiked] = useState([]);
  const [values, setValues] = useState({
    like: false,
    likes: 0
  });

  const { like, likes } = values;
  const token = getCookie("token");

  const checkLiked = likes => {
    const userId = isAuth() && isAuth().user._id;
    let match = likes.indexOf(userId) !== -1;
    return match;
  };
  // const initLike = () => {
  //   if (router.query.slug) {
  //     like(router.query.slug).then(data => {
  //       if (data.error) {
  //         console.log(data.error);
  //       } else {
  //         setValues({
  //           ...values,
  //           like: checkLike(data.like),
  //           likes: data.likes.length
  //         });
  //       }
  //     });
  //   }
  // };

  const loadRelated = () => {
    listRelated({ blog }).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setRelated(data);
        setLiked({ liked: data.checkLiked });
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
          id={blog.id}
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

  const handleLikeToggle = () => {
    if (!isAuth()) {
      Router.push(`/signin`);
    }
    console.log("like click, still no logic!");

    // let callApi =  ;
    // const userId = isAuth().user._id;
    // const token = isAuth().token;

    // callApi(userId, token).then(data => {
    //   if (data.error) {
    //     console.log(data.error);
    //   } else {
    //     setState({
    //       ...values
    //     });
    //   }
    // });
  };

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <main>
          <article>
            <div className="container-fluid">
              <section>
                <div className="row" style={{ marginTop: "-30px" }}>
                  <img
                    src={`${API}/blog/photo/${blog.slug}`}
                    alt={blog.title}
                    className="img img-fluid featured-image"
                  />
                </div>
              </section>

              <section>
                <div className="container">
                  <h1 className="display-2 pb-3 pt-3 text-center font-weight-bold">
                    {blog.title}
                  </h1>
                  <p className="lead mt-3 mark-custom">
                    Written by{" "}
                    <Link href={`/profile/${blog.postedBy.username}`}>
                      <a>{blog.postedBy.username}</a>
                    </Link>{" "}
                    | Published {moment(blog.updatedAt).fromNow()}
                  </p>
                  {/* like */}
                  {like ? (
                    <h5 onClick={handleLikeToggle}>
                      <i className="fa fa-heart-o text-success " /> {likes}{" "}
                      likes
                    </h5>
                  ) : (
                    <h5 onClick={handleLikeToggle}>
                      <i className="fa fa-heart-o text-danger " /> {likes} likes
                    </h5>
                  )}
                  <hr />
                  {/* like */}

                  <div className="pb-3">
                    {/* {showBlogCategories(blog)}
                    {showBlogTags(blog)}
                    <br /> */}
                    {/* <br /> */}
                    {showReactShareIcons()}
                  </div>
                </div>
              </section>
            </div>

            <div className="container">
              <section>
                <div className="col-md-12 lead">{renderHTML(blog.body)}</div>
                <hr />
                {showBlogCategories(blog)}
                {showBlogTags(blog)}
              </section>
            </div>

            <div className="container">
              <h1 className="text-center pt-5 pb-5 text-caveat">
                Related blogs
              </h1>
              <hr />
              <div className="row">{showRelatedBlog()}</div>
            </div>

            <div className="container pt-5 pb-5">{showComments()}</div>
          </article>
        </main>
      </Layout>
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
