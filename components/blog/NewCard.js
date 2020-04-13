import Link from "next/link";
import renderHTML from "react-render-html";
import moment from "moment";
import { API } from "../../config";

const Card = ({ blog }) => {
  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a className="post-category text-white bg-warning mr-2">{c.name}</a>
      </Link>
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="post-category text-white bg-success mr-2">#{t.name}</a>
      </Link>
    ));

  return (
    <React.Fragment>
      <div className="entry2" onClick={(e) => handleClick()}>
        <img
          style={{ width: "100%" }}
          className="img-fluid rounded"
          src={`${API}/blog/photo/${blog.slug}`}
          alt={blog.title}
        />

        <div className="excerpt">
          {showBlogCategories(blog)}
          {showBlogTags(blog)}
          <Link href={`/blogs/${blog.slug}`}>
            <h2 className="mt-3 text-dark">{blog.title}</h2>
          </Link>
          <div className="post-meta align-items-center text-left clearfix">
            <figure className="author-figure mb-0 mr-3 float-left">
              <img
                className="img-fluid rounded-circle"
                src={`${API}/user/photo/${blog.postedBy.username}`}
                alt="Generic placeholder image"
                onError={(i) => (i.target.src = "/static/images/avatar.jpg")}
                style={{ width: "50px", height: "50px" }}
              />
            </figure>
            <span className="d-inline-block mt-3">
              By
              <Link href={`/profile/${blog.postedBy.username}`}>
                <a> {blog.postedBy.username}</a>
              </Link>
            </span>
            <span> - {moment(blog.createdAt).format("MMMM D, YYYY")}</span>
          </div>
          {renderHTML(blog.excerpt)}
          <p>
            <Link href={`/blogs/${blog.slug}`}>
              <a>Read more</a>
            </Link>
          </p>
        </div>

        <style jsx>
          {`
            .entry2 img {
              margin-bottom: 30px;
            }
          `}
        </style>
      </div>
    </React.Fragment>
  );
};

export default Card;
