import { useState, useEffect } from "react";
import { signin, authenticate, isAuth } from "../../actions/auth";
import Router from "next/router";
import Link from "next/link";
import LoginGoogle from "./LoginGoogle";
// import LoginFacebook from "./LoginFacebook";
import InputForm from "../../components/form/InputForm";

const SigninComponent = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { email, password, error, loading, message, showForm } = values;

  // if user is auth, then push to home page
  useEffect(() => {
    isAuth() && Router.push(`/`);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.table({ name, email, password, error, loading, message, showForm });
    setValues({ ...values, loading: true, error: false });
    const user = { email, password };

    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        // save user token to cookie
        // save user info to localstorage
        // authenticate user
        authenticate(data, () => {
          if (isAuth() && isAuth().role === 1) {
            Router.push(`/admin`);
          } else {
            Router.push(`/user`);
          }
        });
      }
    });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const showLoading = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";
  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-info">{message}</div> : "";

  const signinForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <InputForm
          label="Email"
          value={email}
          onChange={handleChange("email")}
          type="email"
          placeholder="Type your email"
        />

        <InputForm
          label="Password"
          value={password}
          onChange={handleChange("password")}
          type="password"
          placeholder="Type your password"
        />

        <button className="btn btn-submit">Sign In</button>
      </form>
    );
  };

  return (
    <React.Fragment>
      {showError()}
      {showLoading()}
      {showMessage()}
      <div className="social-login d-flex justify-content-between">
        <LoginGoogle />
        {/* <LoginFacebook /> */}
      </div>

      {showForm && signinForm()}
      <br />
      <Link href="/auth/password/forgot">
        <a>Forgot password?</a>
      </Link>
    </React.Fragment>
  );
};

export default SigninComponent;
