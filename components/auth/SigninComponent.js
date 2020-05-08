import { useState, useEffect } from "react";
import { signin, authenticate, isAuth } from "../../actions/auth";
import Router from "next/router";
import Link from "next/link";
import LoginGoogle from "./LoginGoogle";
// import LoginFacebook from "./LoginFacebook";
import InputForm from "../../components/form/InputForm";
import { Toast, ToastBody, ToastHeader } from "reactstrap";

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

  // const showLoading = () =>
  //   loading ? (
  //     <div className="lds-circle">
  //       <div></div>
  //     </div>
  //   ) : (
  //     ""
  //   );

  // const showError = () =>
  //   error ? (
  //     <div className="alert-danger">
  //       <div className="alert-icon">
  //         <i
  //           className="fa fa-exclamation-circle"
  //           aria-hidden="true"
  //           style={{ color: "#f44336" }}
  //         ></i>
  //       </div>
  //       <div className="alert-message">{error}</div>
  //     </div>
  //   ) : (
  //     ""
  //   );

  const showError = () =>
    error ? (
      <div className="toast-position">
        <Toast className="danger">
          <ToastHeader className="danger">
            <i
              className="fa fa-exclamation-circle"
              aria-hidden="true"
              style={{ color: "#fff" }}
            ></i>{" "}
            Error
          </ToastHeader>
          <ToastBody>{error}</ToastBody>
        </Toast>
      </div>
    ) : (
      ""
    );

  // const showMessage = () =>
  //   message ? (
  //     <div className="alert-info">
  //       <div className="alert-icon">
  //         <i
  //           className="fa fa-check-circle-o"
  //           aria-hidden="true"
  //           style={{ color: "#4caf50" }}
  //         ></i>
  //       </div>
  //       <div className="alert-message"> {message}</div>
  //     </div>
  //   ) : (
  //     ""
  //   );

  const showMessage = () =>
    message ? (
      <div className="toast-position">
        <Toast className="success">
          <ToastHeader className="success">
            <i
              className="fa fa-check-circle-o"
              aria-hidden="true"
              style={{ color: "#fff" }}
            ></i>{" "}
            Success
          </ToastHeader>
          <ToastBody>{message}</ToastBody>
        </Toast>
      </div>
    ) : (
      ""
    );

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

        <button className="btn btn-submit">
          {loading && <i className="fa fa-refresh fa-spin"></i>}
          {loading && <span> Logging in...</span>}
          {!loading && <span> Login</span>}
        </button>
      </form>
    );
  };

  return (
    <React.Fragment>
      {showError()}
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
