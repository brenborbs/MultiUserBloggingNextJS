import Layout from "../components/Layout";
import SigninComponent from "../components/auth/SigninComponent";
import Link from "next/link";

const Signin = () => {
  return (
    <Layout>
      <div className="sidenav">
        <div className="login-main-text">
          <h2>Sign In</h2>
          <p>Write Something Better Today...</p>
        </div>
      </div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
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

export default Signin;
