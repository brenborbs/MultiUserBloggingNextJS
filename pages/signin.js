import Layout from "../components/Layout";
import Head from "next/head";
import { withRouter } from "next/router";
import SigninComponent from "../components/auth/SigninComponent";
import Link from "next/link";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../config";

const Signin = ({ router }) => {
  const head = () => (
    <Head>
      <title>Sign in | {APP_NAME}</title>
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
  const showRedirectMessage = () => {
    if (router.query.message) {
      return <div className="alert alert-danger">{router.query.message}</div>;
    } else {
      return;
    }
  };
  return (
    <React.Fragment>
      {head()}
      <Layout>
        <div className="forms-margin">
          <div className="forms-wrapper">
            <h2 className="text-center text-dark">Sign In</h2>

            <div className="">{showRedirectMessage()}</div>

            <div className="p-4 pb-4">
              <SigninComponent />
              <div className="signup_text">
                Don't have an account? Register{" "}
                <Link href="/signup">
                  <a>here</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default withRouter(Signin);
