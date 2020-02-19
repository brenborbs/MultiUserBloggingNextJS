import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import Link from "next/link";

const AdminIndex = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid" style={{ marginBottom: "8em" }}>
          <div className="row" style={{ paddingBottom: "60px" }}>
            <div className="col-md-12 pt-5 pb-4">
              <h2>
                <i className="fa fa-info-circle mr-2" aria-hidden="true"></i>
                information
              </h2>
            </div>
            <div className="col-md-4">
              <ul className="list-group">
                <li className="list-group-item">
                  <i className="fa fa-plus mr-1" aria-hidden="true"></i>
                  <Link href="/admin/crud/category-tag">
                    <a>Create Category</a>
                  </Link>
                </li>

                <li className="list-group-item">
                  <i
                    className="fa fa-plus-square-o mr-1"
                    aria-hidden="true"
                  ></i>
                  <Link href="/admin/crud/category-tag">
                    <a>Create Tag</a>
                  </Link>
                </li>

                <li className="list-group-item">
                  <i
                    className="fa fa-pencil-square-o mr-1"
                    aria-hidden="true"
                  ></i>
                  <a href="/admin/crud/blog">Create Blog</a>
                </li>
                <li className="list-group-item">
                  <i className="fa fa-wrench mr-2" aria-hidden="true"></i>
                  <Link href="/admin/crud/blogs">
                    <a>Update or Delete Blog</a>
                  </Link>
                </li>
                <li className="list-group-item">
                  <i
                    className="fa fa-user-circle-o mr-2"
                    aria-hidden="true"
                  ></i>
                  <Link href="/user/update">
                    <a>Update Profile</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <i className="fa fa-id-badge mr-2" aria-hidden="true"></i>
                      Welcome name here
                    </li>
                    <li className="list-group-item">
                      <i
                        className="fa fa-envelope-o mr-2"
                        aria-hidden="true"
                      ></i>
                      Email
                    </li>
                    <li className="list-group-item">
                      <i
                        className="fa fa-briefcase mr-2"
                        aria-hidden="true"
                      ></i>
                      details
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-sign-in mr-2" aria-hidden="true"></i>
                      Joined on
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default AdminIndex;
