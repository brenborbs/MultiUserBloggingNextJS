import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row max-height justify-content-center align-items-center">
          <div className="col-10 mx-auto banner text-center">
            <h1 className="text-capitalize">
              welcome to <strong className="banner-title">lyfinph</strong>
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
                      Indie
                    </h2>
                  </div>
                  <div className="back text-center">
                    <Link href="/categories/react">
                      <a>
                        <h3 className="h1 text-caveat">Indie Bands</h3>
                      </a>
                    </Link>
                    <p className="lead">
                      The world's most popular frontend web development library
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
                    <Link href="/categories/node">
                      <a>
                        <h3 className="h1 text-caveat">Arts</h3>
                      </a>
                    </Link>
                    <p className="lead">
                      The worlds most popular backend development tool for
                      JavaScript Ninjas
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
                    <Link href="/categories/node">
                      <a>
                        <h3 className="h1 text-caveat">Travel</h3>
                      </a>
                    </Link>
                    <p className="lead">
                      The worlds most popular backend development tool for
                      JavaScript Ninjas
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
                    <Link href="/categories/node">
                      <a>
                        <h3 className="h1 text-caveat">Cult films</h3>
                      </a>
                    </Link>
                    <p className="lead">
                      The worlds most popular backend development tool for
                      JavaScript Ninjas
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
                    <Link href="/categories/node">
                      <a>
                        <h3 className="h1 text-caveat">Comedy, Jokes</h3>
                      </a>
                    </Link>
                    <p className="lead">
                      The worlds most popular backend development tool for
                      JavaScript Ninjas
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
                    <Link href="/categories/node">
                      <a>
                        <h3 className="h1 text-caveat">Food Cravings</h3>
                      </a>
                    </Link>
                    <p className="lead">
                      The worlds most popular backend development tool for
                      JavaScript Ninjas
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
