import Link from "next/link";
import { useState, useEffect } from "react";
import Router from "next/router";
import { getCookie, isAuth } from "../../actions/auth";
import { list, removeBlog } from "../../actions/blog";
import moment from "moment";
import { Table } from "reactstrap";

const BlogRead = ({ username }) => {
  // define state
  const [blogs, setBlogs] = useState([]);
  const [message, setMessage] = useState("");
  const token = getCookie("token");

  // load all blogs to state
  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = () => {
    list(username).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setBlogs(data);
      }
    });
  };

  const deleteBlog = (slug) => {
    removeBlog(slug, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setMessage(data.message);
        loadBlogs();
      }
    });
  };

  const deleteConfirm = (slug) => {
    let answer = window.confirm("Are you sure you want to delete your blog?");
    if (answer) {
      deleteBlog(slug);
    }
  };

  const showUpdateButton = (blog) => {
    if (isAuth() && isAuth().role === 0) {
      return (
        <Link href={`/user/crud/${blog.slug}`}>
          <i
            className="fa fa-pencil text-info"
            aria-hidden="true"
            style={{ fontSize: "16px", cursor: "pointer" }}
          ></i>
        </Link>
      );
    } else if (isAuth() && isAuth().role === 1) {
      return (
        <Link href={`/admin/crud/${blog.slug}`}>
          <i
            className="fa fa-pencil text-info"
            aria-hidden="true"
            style={{ fontSize: "16px", cursor: "pointer" }}
          ></i>
        </Link>
      );
    }
  };

  const showAllBlogs = () => {
    return blogs.map((blog, i) => {
      return (
        <tr key={i}>
          <td>{blog.title}</td>
          <td>Written by {blog.postedBy.name}</td>
          <td> {moment(blog.updatedAt).fromNow()}</td>
          <td>{showUpdateButton(blog)}</td>
          <td>
            {" "}
            <i
              className="fa fa-trash-o text-danger"
              aria-hidden="true"
              style={{ fontSize: "16px", cursor: "pointer" }}
              onClick={() => deleteConfirm(blog.slug)}
            ></i>
          </td>
        </tr>
      );
    });
  };

  return (
    <React.Fragment>
      <div className="row">
        {message && (
          <div className="col">
            <div className="alert alert-success">
              <div className="text-center">{message}!</div>
            </div>
          </div>
        )}
        <div className="col-md-12">
          <Table hover>
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Updated</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>{showAllBlogs()}</tbody>
          </Table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogRead;
