import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
import Layout from "../../components/Layout";
import { useState } from "react";
import { listBlogsWithCategoriesAndTags } from "../../actions/blog";
import Card from "../../components/blog/Card";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import Search from "../../components/blog/Search";

const Blogs = ({
  blogs,
  categories,
  tags,
  totalBlogs,
  blogsLimit,
  blogSkip,
  router
}) => {
  const head = () => (
    <Head>
      <title>Shipbuilding News | {APP_NAME}</title>
      <meta
        name="description"
        content="Latest Shipbuilding and Maritime News,Shipping activities and Marine Technology Updates"
      />
      <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
      <meta
        property="og:title"
        content={`Latest Shipbuilding and Maritime News | ${APP_NAME}`}
      />
      <meta
        property="og:description"
        content="Latest Shipbuilding and Maritime News,Shipping activities and Marine Technology Updates"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta
        property="og:image"
        content={`${DOMAIN}/static/images/marineblogger.jpg`}
      />
      <meta
        property="og:image:secure_url"
        ccontent={`${DOMAIN}/static/images/marineblogger.jpg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );
  // load more blogs when loading on state
  const [limit, setLimit] = useState(blogsLimit);
  const [skip, setSkip] = useState(0); // default
  const [size, setSize] = useState(totalBlogs);
  const [loadedBlogs, setLoadedBlogs] = useState([]); // empty area

  const loadMore = () => {
    let toSkip = skip + limit;
    listBlogsWithCategoriesAndTags(toSkip, limit).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setLoadedBlogs([...loadedBlogs, ...data.blogs]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className="btn btn-outline btn-lg">
          Load more
        </button>
      )
    );
  };

  const showAllBlogs = () => {
    return blogs.map((blog, i) => {
      // ()
      return (
        <div className="col-sm-6 pb-4" key={i}>
          <Card blog={blog} />
        </div>
      );
    });
  };

  const showAllCategories = () => {
    return categories.map((c, i) => (
      <div className="col-lg-6" key={i}>
        <Link href={`/categories/${c.slug}`} key={i}>
          <a className="tag category">{c.name}</a>
        </Link>
      </div>
    ));
  };

  const showAllTags = () => {
    return tags.map((t, i) => (
      <div className="col-lg-6" key={i}>
        <Link href={`/tags/${t.slug}`} key={i}>
          <a className="tag tags">{t.name}</a>
        </Link>
      </div>
    ));
  };

  const showLoadedBlogs = () => {
    return loadedBlogs.map((blog, i) => (
      <div className="col-sm-6 pb-4" key={i}>
        <Card blog={blog} />
      </div>
    ));
  };

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <main>
          <div className="container-fluid bg-camera">
            <header>
              <div className="col-md-12 pt-3">
                {/* <h1 className="text-center pt-5">Title here</h1> */}
                <div className="container-bg">
                  <div className="showcase-container pt-5">
                    <div
                      className="showcase-content"
                      style={{ color: "white" }}
                    >
                      {/* <div className="category category-sports">Sports</div> */}
                      <h1>Some Sports Article</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati ad recusandae, aliquid, quaerat sed
                        exercitationem ratione deleniti officiis, doloribus
                        temporibus reprehenderit. Enim odio veritatis accusamus
                        earum minus deserunt reiciendis doloribus.
                      </p>
                      <a
                        href="article.html"
                        className="btn btn-primary"
                        style={{ color: "black", fontWeight: "bold" }}
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
          {/* Blog starts here */}
          <div className="container">
            <h1 className="mt-4 text-caveat">Latest Posts</h1>
            <hr />
            <div className="row">
              {/* main div */}
              <div className="col-lg-8">
                <div className="row">{showAllBlogs()}</div>
                <div className="row">{showLoadedBlogs()}</div>

                <div className="text-center pt-5 pb-5">{loadMoreButton()}</div>
              </div>

              <div className="col-md-4">
                {/* Search Widget */}
                <Search />
                {/* Categories */}
                <div className="card my-4">
                  <h5 className="card-header text-caveat">Categories</h5>
                  <div className="card-body">
                    <div className="row">{showAllCategories()}</div>
                  </div>
                </div>
                <div className="card my-4">
                  <h5 className="card-header text-caveat">Tags</h5>
                  <div className="card-body">
                    <div className="row">{showAllTags()}</div>
                  </div>
                </div>
                {/* Categories */}
                {/* end right side */}
              </div>
              {/* main row ends here */}
            </div>
            {/* Blog ends here */}
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

// getInitialProps can only be used in pages not components! same as componentWillMount
Blogs.getInitialProps = () => {
  let skip = 0;
  let limit = 4;
  return listBlogsWithCategoriesAndTags(skip, limit).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        totalBlogs: data.size,
        blogsLimit: limit,
        blogSkip: skip
      };
    }
  });
};

export default withRouter(Blogs);
