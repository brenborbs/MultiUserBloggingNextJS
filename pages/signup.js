import Layout from "../components/Layout";
import SignupComponent from "../components/auth/SignupComponent";
import Link from "next/link";
import Head from "next/head";
import { withRouter } from "next/router";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../config";

const Signup = ({ router }) => {
  const head = () => (
    <Head>
      <title>Register | {APP_NAME}</title>
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
    <React.Fragment>
      {head()}
      <Layout>
        <div className="forms-margin">
          <div className="forms-wrapper">
            <h2 className="text-center text-dark">Register</h2>
            <div className="p-4 pb-4">
              <SignupComponent />
              <div className="signup_text">
                Already have an existing account? Log in{" "}
                <Link href="/signin">
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

export default withRouter(Signup);
