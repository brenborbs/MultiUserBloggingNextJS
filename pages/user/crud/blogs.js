import Layout from "../../../components/Layout";
import Private from "../../../components/auth/Private";
import BlogRead from "../../../components/crud/BlogRead";
import Link from "next/link";
import { isAuth } from "../../../actions/auth";
import { withRouter } from "next/router";
import Head from "next/head";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../../config";

const Blog = ({ router }) => {
  const head = () => (
    <Head>
      <title>Manage Blogs | {APP_NAME}</title>
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
  const username = isAuth() && isAuth().username;
  return (
    <Layout>
      {head()}
      <Private>
        <div className="container-fluid pt-4">
          <div className="col">
            <h2 className="text-dark">Manage blogs</h2>
          </div>
          <BlogRead username={username} />
        </div>
      </Private>
    </Layout>
  );
};

export default withRouter(Blog);
