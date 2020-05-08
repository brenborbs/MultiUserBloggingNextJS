import Link from "next/link";
import { useState, useEffect } from "react";
import Router from "next/router";
import { getCookie, isAuth, updateUser } from "../../actions/auth";
import { getProfile, update } from "../../actions/user";
import { API } from "../../config";
import { Toast, ToastBody, ToastHeader } from "reactstrap";

const ProfileUpdate = () => {
  const [values, setValues] = useState({
    username: "",
    name: "",
    username_for_photo: "",
    email: "",
    about: "",
    password: "",
    facebook: "",
    twitter: "",
    instagram: "",
    error: false,
    success: false,
    loading: false,
    photo: "",
    userData: process.browser && new FormData(),
  });

  const token = getCookie("token");
  const {
    username,
    username_for_photo,
    name,
    email,
    about,
    password,
    facebook,
    twitter,
    instagram,
    error,
    success,
    loading,
    photo,
    userData,
  } = values;
  // load data to state
  const init = () => {
    getProfile(token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          username: data.username,
          username_for_photo: data.username,
          name: data.name,
          email: data.email,
          about: data.about,
          facebook: data.facebook,
          twitter: data.twitter,
          instagram: data.instagram,
          // photo: data.photo
        });
      }
    });
  };
  // init data using useEffect method
  useEffect(() => {
    init();
    setValues({ ...values, userData: new FormData() });
  }, []);

  const handleChange = (name) => (e) => {
    // console.log(e.target.value);
    const value = name === "photo" ? e.target.files[0] : e.target.value;
    // let userFormData = new FormData();
    userData.set(name, value);
    setValues({
      ...values,
      [name]: value,
      userData,
      error: false,
      success: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true });
    update(token, userData).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          success: false,
          loading: false,
        });
      } else {
        updateUser(data, () => {
          setValues({
            ...values,
            username: data.username,
            name: data.name,
            email: data.email,
            about: data.about,
            facebook: data.facebook,
            twitter: data.twitter,
            instagram: data.instagram,
            // photo: data.photo,
            password: "",
            success: true,
            loading: false,
          });
          if (isAuth() && isAuth().role === 1) {
            // Router.replace(`/admin/crud/${router.query.slug}`);
            Router.replace(`/profile/${username}`);
          } else if (isAuth() && isAuth().role === 0) {
            // Router.replace(`/user/crud/${router.query.slug}`);
            Router.replace(`/profile/${username}`);
          }
        });
      }
    });
  };

  const profileUpdateForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group mt-3">
        <label className="btn btn-info">
          <input
            onChange={handleChange("photo")}
            type="file"
            accept="image/*"
            // hidden
          />
        </label>
      </div>
      <div className="form-group">
        <label className="text-muted">Username</label>
        <input
          onChange={handleChange("username")}
          type="text"
          value={username}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          value={name}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          type="text"
          value={email}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">About</label>
        <textarea
          onChange={handleChange("about")}
          type="text"
          value={about}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-facebook" />
          </span>
          <input
            onChange={handleChange("facebook")}
            type="text"
            value={facebook}
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-twitter" />
          </span>
          <input
            onChange={handleChange("twitter")}
            type="text"
            value={twitter}
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-instagram" />
          </span>
          <input
            onChange={handleChange("instagram")}
            type="text"
            value={instagram}
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          value={password}
          className="form-control"
        />
      </div>
      <div>
        <button type="submit" className="btn btn-submit">
          Submit
        </button>
      </div>
    </form>
  );

  // const showError = () => (
  //   <div
  //     className="alert alert-danger"
  //     style={{ display: error ? "" : "none" }}
  //   >
  //     {error}
  //   </div>
  // );

  const showError = () => (
    <div className="toast-position" style={{ display: error ? "" : "none" }}>
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
  );

  // const showSuccess = () => (
  //   <div
  //     className="alert alert-success"
  //     style={{ display: success ? "" : "none" }}
  //   >
  //     Profile updated
  //   </div>
  // );

  const showSuccess = () => (
    <div className="toast-position" style={{ display: success ? "" : "none" }}>
      <Toast className="success">
        <ToastHeader className="success">
          <i
            className="fa fa-check-circle-o"
            aria-hidden="true"
            style={{ color: "#fff" }}
          ></i>{" "}
          Success
        </ToastHeader>
        <ToastBody>Profile Updated!</ToastBody>
      </Toast>
    </div>
  );

  const showLoading = () => (
    <div
      className="alert alert-info"
      style={{ display: loading ? "" : "none" }}
    >
      Loading...
    </div>
  );

  return (
    <React.Fragment>
      <div className="col">
        <div className="text-center">
          <img
            src={`${API}/user/photo/${username_for_photo}`}
            className="img-fluid rounded-circle"
            alt="user profile"
            onError={(i) => (i.target.src = "/static/images/avatar.jpg")}
          />
        </div>

        {showSuccess()}
        {showError()}
        {showLoading()}
        {profileUpdateForm()}
      </div>
    </React.Fragment>
  );
};

export default ProfileUpdate;
