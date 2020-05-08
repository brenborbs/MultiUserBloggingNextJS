import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import BlogUpdate from "../../../components/crud/BlogUpdate";
import { withRouter } from "next/router";
import Head from "next/head";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../../config";

const Blog = ({ router }) => {
  const head = () => (
    <Head>
      <title>Admin Update Blogs | {APP_NAME}</title>
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
      <Admin>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pt-5 pb-5">
              <h2 className="text-dark">Update blog</h2>
            </div>
            <div className="col-md-12">
              <BlogUpdate />
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default withRouter(Blog);
