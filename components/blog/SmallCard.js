import Link from "next/link";
import renderHTML from "react-render-html";
import moment from "moment";
import { API } from "../../config";

const SmallCard = ({ blog }) => {
  return (
    <div className="card with-shadow">
      <section>
        <Link href={`/blogs/${blog.slug}`}>
          <a>
            <img
              className="img img-fluid store-img"
              style={{ height: "250px", width: "100%" }}
              src={`${API}/blog/photo/${blog.slug}`}
              alt={blog.title}
            />
          </a>
        </Link>
      </section>

      <div className="card-body">
        <section>
          <Link href={`/blogs/${blog.slug}`}>
            <a className="title-card" style={{ color: "black" }}>
              {blog.title}
            </a>
          </Link>
          <hr />
          <div className="card-text">{renderHTML(blog.excerpt)}</div>
        </section>
      </div>
      <div className="card-body">
        Posted on {moment(blog.updatedAt).format("MMMM D, YYYY")} by{" "}
        <Link href={`/profile/${blog.postedBy.username}`}>
          <a>{blog.postedBy.username}</a>
        </Link>{" "}
      </div>
    </div>
  );
};

export default SmallCard;
