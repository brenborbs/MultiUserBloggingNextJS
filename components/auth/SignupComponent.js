import { useState, useEffect } from "react";
import { signup, isAuth, preSignup } from "../../actions/auth";
import Router from "next/router";
import InputForm from "../../components/form/InputForm";

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { name, email, password, error, loading, message, showForm } = values;

  // if user is auth, then push to home page
  useEffect(() => {
    isAuth() && Router.push(`/`);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.table({ name, email, password, error, loading, message, showForm });
    setValues({ ...values, loading: true, error: false });
    const user = { name, email, password };

    preSignup(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          loading: false,
          message: data.message,
          showForm: false,
        });
      }
    });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  // const showLoading = () =>
  //   loading ? <div className="alert alert-info">Loading...</div> : "";
  const showError = () =>
    error ? (
      <div className="alert-danger">
        <div className="alert-icon">
          <i
            className="fa fa-exclamation-circle"
            aria-hidden="true"
            style={{ color: "#f44336" }}
          ></i>
        </div>
        <div className="alert-message">{error}</div>
      </div>
    ) : (
      ""
    );
  const showMessage = () =>
    message ? (
      <div className="alert-info">
        <div className="alert-icon">
          <i
            className="fa fa-check-circle-o"
            aria-hidden="true"
            style={{ color: "#4caf50" }}
          ></i>
        </div>
        <div className="alert-message"> {message}</div>
      </div>
    ) : (
      ""
    );

  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <InputForm
          value={name}
          onChange={handleChange("name")}
          type="text"
          label="Name"
          placeholder="Type your name"
        />

        <InputForm
          value={email}
          onChange={handleChange("email")}
          type="email"
          label="Email"
          placeholder="Type your email"
        />

        <InputForm
          value={password}
          onChange={handleChange("password")}
          type="password"
          label="Password"
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
      {showForm && signupForm()}
    </React.Fragment>
  );
};

export default SignupComponent;
