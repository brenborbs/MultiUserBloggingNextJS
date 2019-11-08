import Link from "next/link";
import renderHTML from "react-render-html";
import moment from "moment";
import { API } from "../../config";

const Card = ({ blog }) => {
  const showBlogCategories = blog =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a className="tag category">{c.name}</a>
      </Link>
    ));

  const showBlogTags = blog =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="tag tags">{t.name}</a>
      </Link>
    ));

  return (
    <React.Fragment>
      <div className="card single-item">
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
            <h6 className="mark card-subtitle mt-1 mb-2 text-muted">
              Written by{" "}
              <Link href={`/profile/${blog.postedBy.username}`}>
                <a>{blog.postedBy.username}</a>
              </Link>{" "}
            </h6>
            <div className="card-text">{renderHTML(blog.excerpt)}</div>
          </div>
          <p className="card-text pt-2">
            <small className="text-muted">
              Published {moment(blog.updatedAt).fromNow()}
            </small>
          </p>
        </div>
      </div>
    </React.Fragment>
    // <div className="lead pb-4">
    //   <header>
    //     <Link href={`/blogs/${blog.slug}`}>
    //       <a style={{ color: "black" }}>
    //         <h2 className="pt-3 pb-3 font-weight-bold">{blog.title}</h2>
    //       </a>
    //     </Link>
    //   </header>
    //   <section>
    //     <p className="mark-custom ml-1 pt-2 pb-2">
    //       Written by{" "}
    //       <Link href={`/profile/${blog.postedBy.username}`}>
    //         <a>{blog.postedBy.username}</a>
    //       </Link>{" "}
    //       | Published {moment(blog.updatedAt).fromNow()}
    //     </p>
    //   </section>
    //   <section>
    //     {showBlogCategories(blog)}
    //     {showBlogTags(blog)}
    //     <br />
    //     <br />
    //   </section>

    //   <div className="row">
    //     <div className="col-md-4">
    //       <section>
    //         <img
    //           className="img img-fluid"
    //           style={{ maxHeight: "150px", width: "auto" }}
    //           src={`${API}/blog/photo/${blog.slug}`}
    //           alt={blog.title}
    //         />
    //       </section>
    //     </div>
    //     <div className="col-md-8">
    //       <section>
    //         <div className="pb-3">{renderHTML(blog.excerpt)}</div>
    //         <Link href={`/blogs/${blog.slug}`}>
    //           <a className="btn btn-outline pt-2">Read more</a>
    //         </Link>
    //       </section>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Card;
