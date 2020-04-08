import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import BlogRead from "../../../components/crud/BlogRead";

const Blog = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid pt-4">
          <div className="col">
            <h2>Manage blogs</h2>
          </div>
          <BlogRead />
        </div>
      </Admin>
    </Layout>
  );
};

export default Blog;
