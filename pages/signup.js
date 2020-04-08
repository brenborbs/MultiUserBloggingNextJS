import Layout from "../components/Layout";
import SignupComponent from "../components/auth/SignupComponent";
import Link from "next/link";

const Signup = () => {
  return (
    <Layout>
      <div className="forms-margin">
        <div className="forms-wrapper">
          <h2 className="text-center">Register</h2>
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
  );
};

export default Signup;
