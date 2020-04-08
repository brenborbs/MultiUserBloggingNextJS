import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import Category from "../../../components/crud/Category";
import Tag from "../../../components/crud/Tag";
import Link from "next/link";

const CategoryTag = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid pt-4">
          <h4 className="text-center mt-2">Manage Categories and Tags</h4>
          <p className="text-center">
            <small className="text-muted">
              * Double click buttons to delete
            </small>
          </p>

          <div className="wrapper">
            <div className="col">
              <Category />
            </div>
            <div className="col mt-4">
              <Tag />
            </div>
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

export default CategoryTag;
