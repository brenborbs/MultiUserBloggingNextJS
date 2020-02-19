import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row max-height justify-content-center align-items-center">
          <div className="col-10 mx-auto banner text-center">
            <h1 className="text-capitalize">
              Seto <strong className="banner-title">- 1</strong>
            </h1>
          </div>
        </div>
      </div>
      {/*  about  */}
      <section className="about py-5" id="about">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-5">
              <h1 className="text-capitalize">
                about <strong className="banner-title">us</strong>
              </h1>
              <p className="my-4 text-muted w-75">
                You are "Us". Your blogs are all "Us". Express yourself and let
                the world know that there is more to life than just "paying the
                bills" and such. Whether you are an avid adventurer, a musician,
                an artist a coder, the sick, or no job.
              </p>
            </div>
            <div className="col-10 mx-auto col-md-6 my-5 align-self-center">
              <div className="about-img__container">
                <img
                  src="static/images/sunset.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  end of about */}
      {/* start categories */}
      <section className="store py-5" id="store">
        <div className="container">
          {/* start section title */}
          <div className="row">
            <div className="col-10 mx-auto col-sm-6 text-center">
              <h1 className="text-capitalize">
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
                        "url(" + "/static/images/concert.jpg" + ")"
                    }}
                  >
                    <h2 className="text-shadow text-caveat text-center h1">
                      Music
                    </h2>
                  </div>
                  <div className="back text-center">
                    <Link href="/categories/music">
                      <a>
                        <h3 className="h1 text-caveat">Indie Bands</h3>
                      </a>
                    </Link>
                    <p className="lead">
                      Rising bands which have gained some following during the
                      last 2 years
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
                      backgroundImage: "url(" + "/static/images/arts.jpg" + ")"
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
                        "url(" + "/static/images/travel.jpg" + ")"
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
                        "url(" + "/static/images/movies.jpg" + ")"
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
                      backgroundImage: "url(" + "/static/images/humor.jpg" + ")"
                    }}
                  >
                    <h2 className="text-shadow text-caveat text-center h1">
                      Humor
                    </h2>
                  </div>
                  <div className="back text-center">
                    <Link href="/categories/humor">
                      <a>
                        <h3 className="h1 text-caveat">Comedy, Jokes</h3>
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
                      backgroundImage: "url(" + "/static/images/food.jpg" + ")"
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
  );
};

export default Index;
