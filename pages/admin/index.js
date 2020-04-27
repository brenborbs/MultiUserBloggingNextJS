import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import Link from "next/link";
import DashInfo from "../../components/DashInfo";

const AdminIndex = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid pt-4">
          <div className="wrapper">
            <h3 className="text-dark">
              <i className="fa fa-info-circle mr-2" aria-hidden="true"></i>
              Admin Controls
            </h3>
            <div className="row">
              <div className="col">
                <ul className="list-group">
                  <li className="list-group-item">
                    <Link href="/admin/crud/category-tag">
                      <a className="btn btn-secondary btn-sm btn-block">
                        <span>
                          {" "}
                          <i className="fa fa-plus mr-1" aria-hidden="true"></i>
                        </span>{" "}
                        Create Category
                      </a>
                    </Link>
                  </li>

                  <li className="list-group-item">
                    <Link href="/admin/crud/category-tag">
                      <a className="btn btn-secondary btn-sm btn-block">
                        <span>
                          {" "}
                          <i
                            className="fa fa-plus-square-o mr-1"
                            aria-hidden="true"
                          ></i>
                        </span>{" "}
                        Create Tag
                      </a>
                    </Link>
                  </li>

                  <li className="list-group-item">
                    <a
                      className="btn btn-secondary btn-sm btn-block"
                      href="/admin/crud/blog"
                    >
                      <span>
                        {" "}
                        <i
                          className="fa fa-pencil-square-o mr-1"
                          aria-hidden="true"
                        ></i>
                      </span>
                      Create Blog
                    </a>
                  </li>
                  <li className="list-group-item">
                    <Link href="/admin/crud/blogs">
                      <a className="btn btn-secondary btn-sm btn-block">
                        <span>
                          <i className="fa fa-database" aria-hidden="true"></i>
                        </span>{" "}
                        Update or Delete Blog
                      </a>
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link href="/user/update">
                      <a className="btn btn-secondary btn-sm btn-block">
                        <span>
                          <i
                            className="fa fa-user-circle-o mr-2"
                            aria-hidden="true"
                          ></i>
                        </span>
                        Update Profile
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <DashInfo />
          </div>
          <style jsx>
            {`
              .wrapper {
                border-radius: 5px;
                background-color: #fff;
                width: 100%;
                max-width: 620px;
                padding: 15px;
                margin: 0 auto;
              }
            `}
          </style>
        </div>
      </Admin>
    </Layout>
  );
};

export default AdminIndex;
