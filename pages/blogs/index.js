import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
import Layout from "../../components/Layout";
import { useState } from "react";
import { listBlogsWithCategoriesAndTags } from "../../actions/blog";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";

import NewCard from "../../components/blog/NewCard";
import Search from "../../components/blog/Search";

const Blogs = ({
  blogs,
  categories,
  tags,
  totalBlogs,
  blogsLimit,
  blogSkip,
  router,
}) => {
  const head = () => (
    <Head>
      <title>Lifestyle Stories, News and Updates | {APP_NAME}</title>
      <meta
        name="description"
        content="Everything under the sun. Joy, hate, laughter and love. All pack in one chocolate box."
      />
      <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
      <meta
        property="og:title"
        content={`My LyfOutside. Stories and more... | ${APP_NAME}`}
      />
      <meta
        property="og:description"
        content="Everything under the sun. Joy, hate, laughter and love. All pack in one chocolate box."
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
    listBlogsWithCategoriesAndTags(toSkip, limit).then((data) => {
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
        <button onClick={loadMore} className="btn btn-loadmore">
          Load more
        </button>
      )
    );
  };

  const showAllBlogs = () => {
    return blogs.map((blog, i) => {
      // col-sm-6 pb-4
      return (
        <div className="col-lg-4 mb-4" key={i}>
          <NewCard blog={blog} />
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
      // col-sm-6 pb-4
      <div className="col-lg-4 mb-4" key={i}>
        <NewCard blog={blog} />
      </div>
    ));
  };

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <Search />
        <div className="site-section">
          <div className="container">
            <div className="row p-5">
              <div className="col-12">
                <h2 className="mb-5">Recent Posts</h2>
              </div>

              <div className="row">
                {showAllBlogs()}
                {showLoadedBlogs()}

                <div className="col-12 text-center">{loadMoreButton()}</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

// getInitialProps can only be used in pages not components! same as componentWillMount
Blogs.getInitialProps = () => {
  let skip = 0;
  let limit = 6;
  return listBlogsWithCategoriesAndTags(skip, limit).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        totalBlogs: data.size,
        blogsLimit: limit,
        blogSkip: skip,
      };
    }
  });
};

export default withRouter(Blogs);
