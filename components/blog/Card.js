import Link from "next/link";
import renderHTML from "react-render-html";
import moment from "moment";
import { API } from "../../config";

const Card = ({ blog }) => {
  // const showBlogCategories = blog =>
  //   blog.categories.map((c, i) => (
  //     <Link key={i} href={`/categories/${c.slug}`}>
  //       <a className="tag category">{c.name}</a>
  //     </Link>
  //   ));

  // const showBlogTags = blog =>
  //   blog.tags.map((t, i) => (
  //     <Link key={i} href={`/tags/${t.slug}`}>
  //       <a className="tag tags">{t.name}</a>
  //     </Link>
  //   ));

  return (
    <React.Fragment>
      <div className="card with-shadow">
        <div className="img-container">
          <img
            style={{ height: "200px", width: "100%" }}
            className="card-img-top store-img"
            src={`${API}/blog/photo/${blog.slug}`}
            alt={blog.title}
          />
        </div>
        <div className="card-body">
          <div className="card-text text-capitalize">
            <Link href={`/blogs/${blog.slug}`}>
              <a className="title-card" style={{ color: "black" }}>
                {blog.title}
              </a>
            </Link>
            <h6 className="card-subtitle mt-1 mb-2 text-muted">
              {/* Author:{" "} */}
              {/* <i className="fa fa-user mr-2" aria-hidden="true"></i> */}
              <Link href={`/profile/${blog.postedBy.username}`}>
                <a>{blog.postedBy.username}</a>
              </Link>{" "}
            </h6>
            <hr />
            {/* <div className="card-text"> */}
            {renderHTML(blog.excerpt)}
            {/* </div> */}
          </div>
          <p className="card-text pt-2">
            <small className="text-muted">
              Published on {moment(blog.updatedAt).format("MMMM D, YYYY")}
            </small>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
