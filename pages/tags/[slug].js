import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { singleTag } from "../../actions/tag";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import renderHTML from "react-render-html";
import moment from "moment";
import NewCard from "../../components/blog/NewCard";

const Tag = ({ tag, blogs, query }) => {
  const head = () => (
    <Head>
      <title>
        {tag.name} | {APP_NAME}
      </title>
      <meta
        name="description"
        content={`Estoryahi ko Stories, Music and Humor ${tag.name}`}
      />
      <link rel="canonical" href={`${DOMAIN}/categories/${query.slug}`} />
      <meta property="og:title" content={`${tag.name}| ${APP_NAME}`} />
      <meta
        property="og:description"
        content={`Estoryahi ko Stories, Music and Humor ${tag.name}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/categories/${query.slug}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta
        property="og:image"
        content={`${DOMAIN}/static/images/estoryahi.png`}
      />
      <meta
        property="og:image:secure_url"
        content={`${DOMAIN}/static/images/estoryahi.png`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <main>
          <div className="container-fluid">
            <header>
              <div className="col-md-12 pt-5">
                <h1 className="display-4 font-weight-bold text-center text-dark">
                  TAGS{" "}
                </h1>
                <p className="lead text-center text-dark">
                  Below you'll find a list of all posts that have been tagged as{" "}
                  <strong>"{tag.name}"</strong>
                </p>
                <hr />
                <div className="col-lg-12">
                  <div className="row">
                    {blogs.map((b, i) => (
                      <div className="col-sm-4 pb-3" key={i}>
                        <NewCard key={i} blog={b} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </header>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

Tag.getInitialProps = ({ query }) => {
  return singleTag(query.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { tag: data.tag, blogs: data.blogs, query };
    }
  });
};

export default Tag;
