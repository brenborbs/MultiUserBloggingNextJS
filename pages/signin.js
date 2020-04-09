import Layout from "../components/Layout";
import { withRouter } from "next/router";
import SigninComponent from "../components/auth/SigninComponent";
import Link from "next/link";

const Signin = ({ router }) => {
  const showRedirectMessage = () => {
    if (router.query.message) {
      return <div className="alert alert-danger">{router.query.message}</div>;
    } else {
      return;
    }
  };
  return (
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
  );
};

export default withRouter(Signin);
