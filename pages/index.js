import Layout from "../components/Layout";
import { withRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../config";

const Index = ({ router }) => {
  const head = () => (
    <Head>
      <title>Main | {APP_NAME}</title>
      <meta
        name="description"
        content="Everything under the sun. Joy, hate, laughter and love. All pack in one chocolate box."
      />
      <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
      <meta
        property="og:title"
        content={`Estoryahi Ko! Stories and more... | ${APP_NAME}`}
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
        content={`${DOMAIN}/static/images/estoryahi.png`}
      />
      <meta
        property="og:image:secure_url"
        ccontent={`${DOMAIN}/static/images/estoryahi.png`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );
  return (
    <React.Fragment>
      {head()}
      <Layout>
        <section className="py-5" id="banner">
          <div className="container">
            <div className="row align-items-center viewport-80">
              <div className="col-10 mx-auto text-center">
                <h1 className="display-2 text-white banner-title">
                  Estoryahi Ko!
                </h1>
                <h2 className="text-muted text-capitalized">
                  Write And Share Your Story Today
                </h2>
                <Link href="/blogs">
                  <a className="btn banner-link m-3">Explore</a>
                </Link>
                <Link href="/signup">
                  <a className="btn banner-link m-3">Start Here</a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* start categories */}
        <section className="store py-5" id="store">
          <div className="container">
            {/* start section title */}
            <div className="row">
              <div className="col-10 mx-auto col-sm-6 text-center">
                <h1 className="text-capitalize text-dark">
                  read our <strong className="banner-title">stories</strong>
                </h1>
              </div>
            </div>
            {/* end section title */}
            <div className="container-fluid">
              <div className="row">
                {/* single items */}
                <div className="col-md-4">
                  <div className="flip flip-horizontal">
                    <div
                      className="front"
                      style={{
                        backgroundImage:
                          "url(" + "/static/images/concert.jpg" + ")",
                      }}
                    >
                      <h2 className="text-shadow text-caveat text-center h1">
                        Music
                      </h2>
                    </div>
                    <div className="back text-center">
                      <Link href="/categories/music">
                        <a>
                          <h3 className="h1 text-caveat">Music</h3>
                        </a>
                      </Link>
                      <p className="lead">
                        Latest tunes and beats today and tommorrow
                      </p>
                    </div>
                  </div>
                </div>
                {/* two */}
                <div className="col-md-4">
                  <div className="flip flip-horizontal">
                    <div
                      className="front"
                      style={{
                        backgroundImage:
                          "url(" + "/static/images/arts.jpg" + ")",
                      }}
                    >
                      <h2 className="text-shadow text-caveat text-center h1">
                        Art
                      </h2>
                    </div>
                    <div className="back text-center">
                      <Link href="/categories/art">
                        <a>
                          <h3 className="h1 text-caveat">Arts</h3>
                        </a>
                      </Link>
                      <p className="lead">
                        Everything the world has to offer regarding arts
                      </p>
                    </div>
                  </div>
                </div>
                {/* three */}
                <div className="col-md-4">
                  <div className="flip flip-horizontal">
                    <div
                      className="front"
                      style={{
                        backgroundImage:
                          "url(" + "/static/images/travel.jpg" + ")",
                      }}
                    >
                      <h2 className="text-shadow text-caveat text-center h1">
                        Travel
                      </h2>
                    </div>
                    <div className="back text-center">
                      <Link href="/categories/travel">
                        <a>
                          <h3 className="h1 text-caveat">Travel</h3>
                        </a>
                      </Link>
                      <p className="lead">
                        Best destinations and travelling without busting your
                        wallet
                      </p>
                    </div>
                  </div>
                </div>
                {/* four */}
                <div className="col-md-4">
                  <div className="flip flip-horizontal">
                    <div
                      className="front"
                      style={{
                        backgroundImage:
                          "url(" + "/static/images/movies.jpg" + ")",
                      }}
                    >
                      <h2 className="text-shadow text-caveat text-center h1">
                        Movies
                      </h2>
                    </div>
                    <div className="back text-center">
                      <Link href="/categories/movies">
                        <a>
                          <h3 className="h1 text-caveat">Cult films</h3>
                        </a>
                      </Link>
                      <p className="lead">
                        Weird movies, premiers and everything related to film
                        addicts
                      </p>
                    </div>
                  </div>
                </div>
                {/* five */}
                <div className="col-md-4">
                  <div className="flip flip-horizontal">
                    <div
                      className="front"
                      style={{
                        backgroundImage:
                          "url(" + "/static/images/humor.jpg" + ")",
                      }}
                    >
                      <h2 className="text-shadow text-caveat text-center h1">
                        Humor
                      </h2>
                    </div>
                    <div className="back text-center">
                      <Link href="/categories/humor">
                        <a>
                          <h3 className="h1 text-caveat">Jokes</h3>
                        </a>
                      </Link>
                      <p className="lead">
                        Good laughs from everything in between
                      </p>
                    </div>
                  </div>
                </div>
                {/* six */}
                <div className="col-md-4">
                  <div className="flip flip-horizontal">
                    <div
                      className="front"
                      style={{
                        backgroundImage:
                          "url(" + "/static/images/food.jpg" + ")",
                      }}
                    >
                      <h2 className="text-shadow text-caveat text-center h1">
                        Food
                      </h2>
                    </div>
                    <div className="back text-center">
                      <Link href="/categories/food">
                        <a>
                          <h3 className="h1 text-caveat">Food Cravings</h3>
                        </a>
                      </Link>
                      <p className="lead">
                        Best foods, exotic and non-exotic without busting your
                        wallet. Only taste buds required for this one
                      </p>
                    </div>
                  </div>
                </div>
                {/* end of single items */}
              </div>
            </div>
          </div>
        </section>
        {/* end categories */}
      </Layout>
    </React.Fragment>
  );
};

export default withRouter(Index);
