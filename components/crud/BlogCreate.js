import Link from "next/link";
import { useState, useEffect } from "react";
import Router from "next/router";
import dynamic from "next/dynamic";
import { withRouter } from "next/router"; // same as props
import { getCookie, isAuth } from "../../actions/auth";
import { getCategories } from "../../actions/category";
import { getTags } from "../../actions/tag";
import { createBlog } from "../../actions/blog";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }); // text editor
// import "../../node_modules/react-quill/dist/quill.snow.css"; // error, cannot show the page
import { QuillModules, QuillFormats } from "../../helpers/quill";
import { Toast, ToastBody, ToastHeader } from "reactstrap";

const CreateBlog = ({ router }) => {
  // grab blog body from local storage
  const blogFromLS = () => {
    if (typeof window === "undefined") {
      return false;
    }

    if (localStorage.getItem("blog")) {
      return JSON.parse(localStorage.getItem("blog"));
    } else {
      return false;
    }
  };

  // Show ctegories and tags
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  const [checked, setChecked] = useState([]); // categories
  const [checkedTag, setCheckedTag] = useState([]); // tags

  const [body, setBody] = useState(blogFromLS());
  const [values, setValues] = useState({
    error: "",
    sizeError: "",
    success: "",
    formData: "",
    title: "",
    hidePublishButton: false,
    loading: false,
  });

  const {
    error,
    sizeError,
    success,
    formData,
    title,
    hidePublishButton,
    loading,
  } = values;
  const token = getCookie("token");

  // lifecycle, load blog when render and grab props, populate state
  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    initCategories();
    initTags();
  }, [router]);

  const publishBlog = (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: false });
    // console.log('ready to publishBlog');
    createBlog(formData, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          title: "",
          error: "",
          success: `A new blog titled "${data.title}" is created`,
        });
        setBody("");
        setCategories([]);
        setTags([]);
      }
    });
  };

  const initCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setCategories(data);
      }
    });
  };

  const initTags = () => {
    getTags().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setTags(data);
      }
    });
  };

  const handleChange = (name) => (e) => {
    // console.log(e.target.value);
    const value = name === "photo" ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value, formData, error: "" });
  };

  const handleBody = (e) => {
    // console.log(e);
    setBody(e);
    formData.set("body", e);
    if (typeof window !== "undefined") {
      localStorage.setItem("blog", JSON.stringify(e));
    }
  };

  const handleToggle = (c) => () => {
    setValues({ ...values, error: "" });
    // return the first index or -1
    const clickedCategory = checked.indexOf(c);
    const all = [...checked]; // values in state
    // if category exist then take-out splice , if exist then push
    if (clickedCategory === -1) {
      all.push(c);
    } else {
      all.splice(clickedCategory, 1);
    }
    console.log(all);
    setChecked(all);
    formData.set("categories", all);
  };

  const handleTagsToggle = (t) => () => {
    setValues({ ...values, error: "" });
    // return the first index or -1
    const clickedTag = checked.indexOf(t);
    const all = [...checkedTag];

    if (clickedTag === -1) {
      all.push(t);
    } else {
      all.splice(clickedTag, 1);
    }
    console.log(all);
    setCheckedTag(all);
    formData.set("tags", all);
  };

  const showCategories = () => {
    return (
      categories &&
      categories.map((c, i) => (
        <li key={i} className="list-unstyled">
          <input
            onChange={handleToggle(c._id)}
            type="checkbox"
            className="mr-2"
          />
          <label className="form-check-label">{c.name}</label>
        </li>
      ))
    );
  };

  const showTags = () => {
    return (
      tags &&
      tags.map((t, i) => (
        <li key={i} className="list-unstyled">
          <input
            onChange={handleTagsToggle(t._id)}
            type="checkbox"
            className="mr-2"
          />
          <label className="form-check-label">{t.name}</label>
        </li>
      ))
    );
  };

  // const showError = () => (
  //   <div
  //     className="alert alert-danger"
  //     style={{ display: error ? "" : "none" }}
  //   >
  //     <div className="alert-icon">
  //       <i
  //         className="fa fa-exclamation-circle"
  //         aria-hidden="true"
  //         style={{ color: "#f44336" }}
  //       ></i>
  //     </div>
  //     <div className="alert-message"> {error}</div>
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
  //     <div className="alert-icon">
  //       <i
  //         className="fa fa-check-circle-o"
  //         aria-hidden="true"
  //         style={{ color: "#4caf50" }}
  //       ></i>
  //     </div>
  //     <div className="alert-message">{success}</div>
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
        <ToastBody>{success}</ToastBody>
      </Toast>
    </div>
  );

  const createBlogForm = () => {
    return (
      <form onSubmit={publishBlog}>
        <div className="form-group">
          <label className="text-muted">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={handleChange("title")}
          />
        </div>

        <div className="form-group">
          <ReactQuill
            modules={QuillModules}
            formats={QuillFormats}
            value={body}
            placeholder="Write something amazing..."
            onChange={handleBody}
          />
        </div>

        <div>
          <button type="submit" className="btn btn-submit">
            {loading && <i className="fa fa-refresh fa-spin"></i>}
            {loading && <span> Publishing...</span>}
            {!loading && <span> Publish</span>}
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="container-fluid pb-5">
      <div className="row">
        <div className="col-md-8">
          {createBlogForm()}
          <div className="pt-3">
            {showError()}
            {showSuccess()}
          </div>
        </div>

        <div className="col-md-4">
          <div>
            <div className="form-group pb-2">
              <h5 className="text-dark">Featured image</h5>
              <hr />

              <small className="text-muted">Max size: 1mb</small>
              <br />
              <label className="btn btn-info">
                <input
                  onChange={handleChange("photo")}
                  type="file"
                  accept="image/*"
                  required={true}
                  // hidden
                />
              </label>
            </div>
          </div>
          <div>
            <h5 className="text-dark">Categories</h5>
            <hr />

            <ul style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {showCategories()}
            </ul>
          </div>
          <div>
            <h5 className="text-dark">Tags</h5>
            <hr />
            <ul style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {showTags()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CreateBlog); // same as grabbing props
