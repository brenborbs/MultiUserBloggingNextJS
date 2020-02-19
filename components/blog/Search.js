import Link from "next/link";
import renderHTML from "react-render-html";
import { useState, useEffect } from "react";
import { listSearch } from "../../actions/blog";

const Search = () => {
  const [values, setValues] = useState({
    search: undefined,
    results: [],
    searched: false,
    message: ""
  });

  const { search, results, searched, message } = values;

  const searchSubmit = e => {
    e.preventDefault();
    listSearch({ search }).then(data => {
      setValues({
        ...values,
        results: data,
        searched: true,
        message: `${data.length} blogs found`
      });
    });
  };

  const handleChange = e => {
    // console.log(e.target.value);
    setValues({
      ...values,
      search: e.target.value,
      searched: false,
      results: []
    });
  };

  const searchedBlogs = (results = []) => {
    return (
      <div className="bg-white text-center pb-2">
        {message && <p className="text-muted font-italic">{message}</p>}

        {results.map((blog, i) => {
          return (
            <div key={i}>
              <Link href={`/blogs/${blog.slug}`}>
                <a>{blog.title}</a>
              </Link>
            </div>
          );
        })}
      </div>
    );
  };

  const searchForm = () => (
    <form onSubmit={searchSubmit}>
      <div className="card-body">
        <div className="input-group">
          <input
            type="search"
            className="form-control"
            placeholder="Advance Search"
            onChange={handleChange}
          />
          <span className="input-group-btn">
            {" "}
            <button className="btn btn-head" type="submit">
              Go!
            </button>
          </span>
        </div>
      </div>
    </form>
  );

  return (
    <div className="card my-4 with-shadow">
      <h5 className="card-header text-caveat">Search</h5>
      {searchForm()}
      {searched && <div>{searchedBlogs(results)}</div>}
    </div>
  );
};

export default Search;
