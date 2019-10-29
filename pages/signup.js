import Layout from "../components/Layout";
import SignupComponent from "../components/auth/SignupComponent";
import Link from "next/link";

const Signup = () => {
  return (
    <Layout>
      <div className="sidenav">
        <div className="login-main-text">
          <h2>Register</h2>
          <p>Express Yourself and Be Move...</p>
        </div>
      </div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <SignupComponent />
            <div className="signup_text">
              Already have an existing account? Log In{" "}
              <Link href="/signin">
                <a>here</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
