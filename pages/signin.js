import Layout from "../components/Layout";
import SigninComponent from "../components/auth/SigninComponent";
import Link from "next/link";

const Signin = () => {
  return (
    <Layout>
      <h2 className="text-center pt-4 pb-4">Sign In</h2>
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
    </Layout>
  );
};

export default Signin;
