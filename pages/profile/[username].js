import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { userPublicProfile } from "../../actions/user";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import moment from "moment";
import ContactForm from "../../components/form/ContactForm";
import isEmpty from "../../helpers/is-empty";
import renderHTML from "react-render-html";

const UserProfile = ({ user, blogs, query }) => {
  const head = () => (
    <Head>
      <title>
        {user.username} | {APP_NAME}
      </title>
      <meta name="description" content={`Blogs by ${user.username}`} />
      <link rel="canonical" href={`${DOMAIN}/profile/${query.username}`} />
      <meta property="og:title" content={`${user.username}| ${APP_NAME}`} />
      <meta property="og:description" content={`Blogs by ${user.username}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/profile/${query.username}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta
        property="og:image"
        content={`${DOMAIN}/static/images/marineblogger.jpg`}
      />
      <meta
        property="og:image:secure_url"
        content={`${DOMAIN}/static/images/marineblogger.jpg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a className="post-category text-white bg-warning mr-1 mb-1">
          {c.name}
        </a>
      </Link>
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="post-category text-white bg-success mr-1">#{t.name}</a>
      </Link>
    ));

  const showUserBlogs = () => {
    return blogs.map((blog, i) => {
      return (
        <div className="col" key={i}>
          <Link href={`/blogs/${blog.slug}`}>
            <div className="media mt-5">
              <img
                className="mr-3 img-fluid"
                src={`${API}/blog/photo/${blog.slug}`}
                alt={blog.title}
                style={{ width: "50px", height: "50px" }}
              />
              <div className="media-body font-weight-light">
                <h5 className="mt-0 text-dark">{blog.title} </h5>
                {renderHTML(blog.excerpt)}
                {showBlogCategories(blog)} {showBlogTags(blog)}
                <hr />
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <div className="userprofile-wrapper">
          <div className="userprofile-first">
            <div>
              <div className="userprofile-second">
                <div className="userprofile-left">
                  <div className="leftprofirst">
                    <div className="image-wrapper">
                      <img
                        src={`${API}/user/photo/${user.username}`}
                        style={{ width: "100%" }}
                        alt="user profile"
                        onError={(i) =>
                          (i.target.src = "/static/images/avatar.jpg")
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="userprofile-right">
                  <div className="rightprofirst">
                    <div className="colright">
                      <div className="colrightfirst">
                        <div className="username text-dark">{user.name}</div>
                        <div className="controlbuttons"></div>
                      </div>
                    </div>
                    <div className="colright">
                      <div className="profdetails">
                        <div className="datejoined ing">
                          <div className="joinfir">
                            <div className="joinsec">
                              <i className="fa fa-calendar ofi"></i> Joined{" "}
                              {moment(user.createdAt).format("MMMM D YYYY")}
                            </div>
                          </div>
                        </div>
                        <div className="profabout ing">{user.about}</div>
                        <div className="profemail ing">
                          <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                          {user.email}
                        </div>
                        <div className="social">
                          <div className="social-fir">
                            <div className="social-sec">
                              <div className="social-icons">
                                {isEmpty(
                                  user.facebook && user.facebook
                                ) ? null : (
                                  <a href={user.facebook} target="_blank">
                                    <i className="fa fa-facebook-square fa-2x" />
                                  </a>
                                )}
                              </div>
                              <div className="social-icons">
                                {isEmpty(
                                  user.twitter && user.twitter
                                ) ? null : (
                                  <a href={user.twitter} target="_blank">
                                    <i className="fa fa-twitter-square fa-2x" />
                                  </a>
                                )}
                              </div>
                              <div className="social-icons">
                                {isEmpty(
                                  user.instagram && user.instagram
                                ) ? null : (
                                  <a href={user.instagram} target="_blank">
                                    <i className="fa fa-instagram fa-2x" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Profile Bottom */}
        <div className="profile-bottom">
          <div className="profile-tab-container">
            <div className="profile-row">
              <div className="column">{showUserBlogs()}</div>
              {/* <div className="column">
                <div className="col p-2">
                  <h5>Send a message to {user.name} </h5>
                  <ContactForm authorEmail={user.email} />
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <style jsx>
          {`
            .profile-tab-container {
              padding: 20px;
            }
            .profile-row {
              display: block;
            }
            @media screen and (min-width: 728px) {
              .profile-row {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-column-gap: 2rem;
              }
            }
            .profile-bottom {
              max-width: 75rem;
              margin-left: auto;
            }
            .userprofile-wrapper {
              padding-bottom: 48px;
              margin-left: auto;
              margin-right: auto;
              background: whitesmoke;
            }
            @media (min-width: 768px) {
              .userprofile-wrapper {
                padding-top: 20px;
                max-width: 1320px;
              }
            }

            .userprofile-first {
              padding: 12px;
              margin-top: 4rem;
            }
            @media (min-width: 768px) {
              .userprofile-first {
                margin-top: 0.5rem;
              }
            }
            .userprofile-second {
              margin-bottom: -16px;
              margin-left: -24px;
            }
            @media (min-width: 768px) {
              .userprofile-second {
                display: flex;
              }
            }
            .userprofile-left {
              padding-bottom: 16px;
              padding-left: 24px;
            }
            @media (min-width: 768px) {
              .userprofile-left {
                display: flex;
                width: 33.33333%;
              }
            }
            .userprofile-right {
              padding-bottom: 16px;
              padding-left: 24px;
            }
            @media (min-width: 768px) {
              .userprofile-right {
                width: 66.66667%;
              }
            }
            .leftprofirst {
              position: relative;
            }
            @media (min-width: 768px) {
              .leftprofirst {
                margin-left: auto;
                margin-right: 32px;
              }
            }

            .rightprofirst {
              margin-bottom: -16px;
              margin-left: 0px;
            }
            .colright {
              padding-bottom: 16px;
              padding-left: 0px;
            }

            @media (min-width: 480px) {
              .colrightfirst {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                margin-bottom: -24px;
                margin-left: -24px;
              }
            }
            .username {
              font-size: 21px;
              font-weight: 700;
              line-height: 1.2;
              color: var(--grey-main);
            }
            @media (min-width: 480px) {
              .username {
                padding-bottom: 24px;
                padding-left: 24px;
              }
            }

            @media (min-width: 768px) {
              .username {
                font-size: 40px;
              }
            }
            @media (min-width: 480px) {
              .controlbuttons {
                padding-bottom: 24px;
                padding-left: 24px;
              }
            }
            .controlbtnwrapper {
              margin-bottom: -8px;
              margin-left: -8px;
              display: flex;
              align-items: center;
            }

            .contbtn {
              padding-bottom: 8px;
              padding-left: 8px;
            }
            .profdetails {
              line-height: 1.4;
              margin-bottom: -16px;
              margin-left: -16px;
            }
            .ing {
              padding-bottom: 16px;
              padding-left: 16px;
              color: var(--grey-main);
            }
            .joinfir {
              word-break: break-all;
              display: flex;
              flex-wrap: wrap;
              margin-bottom: -8px;
              margin-left: -24px;
            }
            .joinsec {
              padding-bottom: 8px;
              padding-left: 24px;
              min-width: 0px;
            }
            .ofi {
              color: #767676;
            }
            .profabout {
              overflow-wrap: break-word;
            }
            .profemail {
              color: rgb(118, 118, 118);
              line-height: 1.4;
            }

            .social {
              display: flex;
              align-items: center;
              flex-wrap: wrap;
            }
            .social-fir {
              padding-bottom: 16px;
              padding-left: 16px;
            }
            .social-sec {
              display: flex;
              flex-wrap: wrap;
              margin-bottom: -8px;
              margin-left: -8px;
              overflow: hidden;
            }
            .social-icons {
              padding-bottom: 8px;
              padding-left: 8px;
            }
            .social-icons .fa {
              color: rgb(118, 118, 118);
            }
            .image-wrapper {
              position: relative;
              display: inline-block;
              line-height: 1;
              border-radius: 50%;
              overflow: hidden;
              vertical-align: middle;
              background-color: rgba(0, 0, 0, 0.1);
              width: 150px;
              height: 150px;
            }
            .image-wrapper img {
              height: 150px;
              vertical-align: unset;
              width: 100%;
            }
          `}
        </style>
      </Layout>
    </React.Fragment>
  );
};

UserProfile.getInitialProps = ({ query }) => {
  // console.log(query);
  return userPublicProfile(query.username).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      // console.log(data);
      return { user: data.user, blogs: data.blogs, query };
    }
  });
};

export default UserProfile;
