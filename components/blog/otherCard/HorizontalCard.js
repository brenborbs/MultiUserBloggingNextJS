import React from "react";
import Link from "next/link";
import renderHTML from "react-render-html";
import moment from "moment";
import { API } from "../../../config";

const HorizontalCard = ({ blog }) => {
  return (
    <React.Fragment>
      <div className="card single-item mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={`${API}/blog/photo/${blog.slug}`}
              alt={blog.title}
              className="img-fluid"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <Link href={`/blogs/${blog.slug}`}>
                <a className="title-card" style={{ color: "black" }}>
                  {blog.title}
                </a>
              </Link>
              <div className="card-text">
                <small className="text-muted">
                  <Link href={`/profile/${blog.postedBy.username}`}>
                    <a>{blog.postedBy.username}</a>
                  </Link>{" "}
                </small>
                {renderHTML(blog.excerpt)}
                <p className="card-text pt-2">
                  <small className="text-muted">
                    Published on {moment(blog.updatedAt).format("MMMM D, YYYY")}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HorizontalCard;
