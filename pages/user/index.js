import Layout from "../../components/Layout";
import Private from "../../components/auth/Private";
import Link from "next/link";
import DashInfo from "../../components/DashInfo";

const UserIndex = () => {
  return (
    <Layout>
      <Private>
        <div className="container-fluid pt-4">
          <div className="wrapper">
            <h3>
              <i className="fa fa-info-circle mr-2" aria-hidden="true"></i> User
              Controls
            </h3>
            <div className="row">
              <div className="col">
                <ul className="list-group">
                  <li className="list-group-item">
                    <i className="fa fa-plus mr-1" aria-hidden="true"></i>
                    <a href="/user/crud/blog">Create Blog</a>
                  </li>

                  <li className="list-group-item">
                    <i
                      className="fa fa-pencil-square-o mr-1"
                      aria-hidden="true"
                    ></i>
                    <Link href="/user/crud/blogs">
                      <a>Update/Delete Blog</a>
                    </Link>
                  </li>

                  <li className="list-group-item">
                    <i
                      className="fa fa-user-circle-o mr-2"
                      aria-hidden="true"
                    ></i>
                    <a href="/user/update">Update profile</a>
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
      </Private>
    </Layout>
  );
};

export default UserIndex;
