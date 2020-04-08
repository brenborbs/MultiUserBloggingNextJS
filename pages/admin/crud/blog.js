import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import BlogCreate from "../../../components/crud/BlogCreate";
import Link from "next/link";

const Blog = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row pt-4">
            <div className="col-md-12">
              <h2 className="ml-3">Create blog</h2>
              <BlogCreate />
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default Blog;
