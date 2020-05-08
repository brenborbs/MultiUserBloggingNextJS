import Layout from "../../components/Layout";
import Private from "../../components/auth/Private";
import Link from "next/link";
import DashInfo from "../../components/DashInfo";
import { withRouter } from "next/router";
import Head from "next/head";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";

const UserIndex = ({ router }) => {
  const head = () => (
    <Head>
      <title>Dashboard | {APP_NAME}</title>
      <meta
        name="description"
        content="Everything under the sun. Joy, hate, laughter and love. All pack in one chocolate box."
      />
      <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
      <meta
        property="og:title"
        content={`Estoryahi Ko! Stories and more... | ${APP_NAME}`}
      />
      <meta
        property="og:description"
        content="Everything under the sun. Joy, hate, laughter and love. All pack in one chocolate box."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta
        property="og:image"
        content={`${DOMAIN}/static/images/estoryahi.png`}
      />
      <meta
        property="og:image:secure_url"
        ccontent={`${DOMAIN}/static/images/estoryahi.png`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );
  return (
    <Layout>
      {head()}
      <Private>
        <div className="container-fluid pt-4">
          <div className="wrapper">
            <h3 className="text-dark">
              <i className="fa fa-info-circle mr-2" aria-hidden="true"></i> User
              Controls
            </h3>
            <div className="row">
              <div className="col">
                <ul className="list-group">
                  <li className="list-group-item">
                    <a
                      className="btn btn-secondary btn-sm btn-block"
                      href="/user/crud/blog"
                    >
                      <span>
                        {" "}
                        <i className="fa fa-plus mr-1" aria-hidden="true"></i>
                      </span>{" "}
                      Create Blog
                    </a>
                  </li>

                  <li className="list-group-item">
                    <Link href="/user/crud/blogs">
                      <a className="btn btn-secondary btn-sm btn-block">
                        <span>
                          <i
                            className="fa fa-pencil-square-o mr-1"
                            aria-hidden="true"
                          ></i>
                        </span>{" "}
                        Update/Delete Blog
                      </a>
                    </Link>
                  </li>

                  <li className="list-group-item">
                    <Link href="/user/update">
                      <a className="btn btn-secondary btn-sm btn-block">
                        <span>
                          <i
                            className="fa fa-user-circle-o mr-2"
                            aria-hidden="true"
                          ></i>
                        </span>{" "}
                        Update profile
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <DashInfo />
          </div>
          <style jsx>
            {`
              .wrapper {
                border-radius: 5px;
                background-color: #fff;
                width: 100%;
                max-width: 620px;
                padding: 15px;
                margin: 0 auto;
              }
            `}
          </style>
        </div>
      </Private>
    </Layout>
  );
};

export default withRouter(UserIndex);
