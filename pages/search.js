import Layout from "../components/Layout";
import Link from "next/link";
import Search from "../components/blog/Search";

const SearchIndex = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row" style={{ marginTop: "5em", marginBottom: "5em" }}>
          <div style={{ paddingTop: "10px" }}>
            <h2>Advance Search</h2>
            <p className="lead">What do you want to read today?</p>
          </div>
          <Search />
        </div>
      </div>
    </Layout>
  );
};

export default SearchIndex;
