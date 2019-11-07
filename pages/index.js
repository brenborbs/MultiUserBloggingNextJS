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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate beatae est hic iusto cupiditate modi! Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Ipsa, facere.
              </p>
            </div>
            <div className="col-10 mx-auto col-md-6 my-5 align-self-center">
              <div className="about-img__container">
                <img
                  src="static/images/concert.jpg"
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
                blog <strong className="banner-title">categories</strong>
              </h1>
            </div>
          </div>
          {/* end section title */}
          <div className="row store-items" id="store-items">
            {/* single items */}
            <div
              className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets"
              data-item="sweets"
            >
              <div className="card single-item">
                <div className="img-container">
                  <img
                    src="/static/images/concert.jpg"
                    className="card-img-top store-img"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> sweet item</h5>
                    <h5 className="store-item-value">Read more</h5>
                  </div>
                </div>
              </div>
            </div>
            {/* end of single items */}
            {/* single items */}
            <div
              className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets"
              data-item="sweets"
            >
              <div className="card single-item">
                <div className="img-container">
                  <img
                    src="/static/images/concert.jpg"
                    className="card-img-top store-img"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> sweet item</h5>
                    <h5 className="store-item-value">Read more</h5>
                  </div>
                </div>
              </div>
            </div>
            {/* end of single items */}
            {/* single items */}
            <div
              className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets"
              data-item="sweets"
            >
              <div className="card single-item">
                <div className="img-container">
                  <img
                    src="/static/images/concert.jpg"
                    className="card-img-top store-img"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> Machinery</h5>
                    <Link href="/categories/machinery">
                      <a>
                        <h5 className="store-item-value">Read more</h5>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* end of single items */}
            {/* single items */}
            <div
              className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets"
              data-item="sweets"
            >
              <div className="card single-item">
                <div className="img-container">
                  <img
                    src="/static/images/concert.jpg"
                    className="card-img-top store-img"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> Machinery</h5>
                    <Link href="/categories/machinery">
                      <a>
                        <h5 className="store-item-value">Read more</h5>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* end of single items */}
            {/* single items */}
            <div
              className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets"
              data-item="sweets"
            >
              <div className="card single-item">
                <div className="img-container">
                  <img
                    src="/static/images/concert.jpg"
                    className="card-img-top store-img"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> Machinery</h5>
                    <Link href="/categories/machinery">
                      <a>
                        <h5 className="store-item-value">Read more</h5>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* end of single items */}
            {/* single items */}
            <div
              className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets"
              data-item="sweets"
            >
              <div className="card single-item">
                <div className="img-container">
                  <img
                    src="/static/images/concert.jpg"
                    className="card-img-top store-img"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> Machinery</h5>
                    <Link href="/categories/machinery">
                      <a>
                        <h5 className="store-item-value">Read more</h5>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* end of single items */}
          </div>
        </div>
      </section>
      {/* end categories */}
    </Layout>
  );
};

export default Index;
