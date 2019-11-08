import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { userPublicProfile } from "../../actions/user";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import moment from "moment";
import ContactForm from "../../components/form/ContactForm";

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

  const showUserBlogs = () => {
    return blogs.map((blog, i) => {
      return (
        <div className="mt-4 mb-4" key={i}>
          <Link href={`/blogs/${blog.slug}`}>
            <a className="lead">{blog.title}</a>
          </Link>
        </div>
      );
    });
  };

  const photoURL = user.username
    ? `${API}/user/photo/${user.username}`
    : "/static/images/avatar.jpg";

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <div
          className="container"
          style={{
            paddingTop: "40px",
            paddingBottom: "40px"
          }}
        >
          <div className="row">
            <div className="col-md-12">
              <div className="card card-body bg-custom text-white mb-3">
                <div className="row">
                  <div className="col-4 col-md-3 m-auto">
                    <img
                      src={photoURL}
                      className="rounded-circle"
                      style={{ width: "100%" }}
                      alt="user profile"
                      onError={i =>
                        (i.target.src = "/static/images/avatar.jpg")
                      }
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h5 className="display-4 text-center pt-3">{user.name}</h5>
                  <p className="lead text-center">
                    Joined {moment(user.createdAt).fromNow()}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Bio */}
          <div className="row">
            <div className="col-md-12">
              <div className="card card-body bg-cust mb-3 text-light">
                <h3 className="text-center">{user.name}'s Bio</h3>
                <p className="lead">{user.about}</p>
              </div>
            </div>
          </div>
          {/* Show User Blogs */}
          <div className="row">
            <div className="col-md-6">
              <h3>Recent blogs by {user.name} </h3>
              <ul className="list-group">
                <li className="list-group-item">{showUserBlogs()}</li>
              </ul>
            </div>

            <div className="col-md-6">
              <h3>Message {user.name} </h3>
              <ul className="list-group">
                <li className="list-group-item">
                  <ContactForm authorEmail={user.email} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

UserProfile.getInitialProps = ({ query }) => {
  // console.log(query);
  return userPublicProfile(query.username).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data);
      return { user: data.user, blogs: data.blogs, query };
    }
  });
};

export default UserProfile;
