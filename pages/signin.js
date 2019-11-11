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
      <div style={{ paddingBottom: "60px", paddingTop: "40px" }}>
        <h2 className="text-center">Sign In</h2>
        <div className="row">
          <div className="col-md-6 offset-md-3">{showRedirectMessage()}</div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
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
