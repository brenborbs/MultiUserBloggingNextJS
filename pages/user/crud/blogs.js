import Layout from "../../../components/Layout";
import Private from "../../../components/auth/Private";
import BlogRead from "../../../components/crud/BlogRead";
import Link from "next/link";
import { isAuth } from "../../../actions/auth";

const Blog = () => {
  const username = isAuth() && isAuth().username;
  return (
    <Layout>
      <Private>
        <div className="container-fluid pt-4">
          <div className="col">
            <h2 className="text-dark">Manage blogs</h2>
          </div>
          <BlogRead username={username} />
        </div>
      </Private>
    </Layout>
  );
};

export default Blog;
