import Link from "next/link";
import renderHTML from "react-render-html";
import { useState, useEffect } from "react";
import { listSearch } from "../../actions/blog";
import { getTags } from "../../actions/tag";
import NewCard from "./NewCard";

const Search = () => {
  const [values, setValues] = useState({
    search: undefined,
    results: [],
    searched: false,
    message: "",
  });

  // Get all Tags
  const [tags, setTags] = useState([]);

  const initTags = () => {
    getTags().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setTags(data);
      }
    });
  };

  // load state all Tags
  useEffect(() => {
    initTags();
  }, []);

  const { search, results, searched, message } = values;

  const searchSubmit = (e) => {
    e.preventDefault();
    listSearch({ search }).then((data) => {
      setValues({
        ...values,
        results: data,
        searched: true,
        message: `${data.length} blogs found`,
      });
    });
  };

  const showAllTags = () => {
    return tags.map((t, i) => (
      <li className="list-inline-item" key={i}>
        <Link href={`/tags/${t.slug}`} key={i}>
          <a className="text-light">#{t.name}</a>
        </Link>
      </li>
    ));
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    setValues({
      ...values,
      search: e.target.value,
      searched: false,
      results: [],
    });
  };

  const searchedBlogs = (results = []) => {
    return (
      <React.Fragment>
        {results.map((blog, i) => {
          return (
            <div className="col-md-4" key={i}>
              <NewCard blog={blog} />
            </div>
          );
        })}
      </React.Fragment>
    );
  };

  const searchForm = () => (
    <form className="card card-sm mt-3" onSubmit={searchSubmit}>
      <div className="search-body row no-gutters align-items-center">
        <div className="col-auto">
          <i className="fa fa-search h2 text-body"></i>
        </div>

        <div className="col">
          <input
            className="form-control form-control-lg form-control-borderless"
            type="search"
            placeholder="Search topics or keywords"
            onChange={handleChange}
          />
        </div>

        <div className="col-auto">
          <button className="btn btn-lg btn-search" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row search-image justify-content-center">
          <div className="col-10 mx-auto search-text text-left">
            <h1 className="text-light font-weight-bold">
              <strong>Estoryahi Ko!</strong>
            </h1>
            <p className="lead text-light">Write and share your story today</p>
            {searchForm()}
            <ul className="list-inline text-light mt-3">
              Tags: {showAllTags()}
            </ul>
          </div>
        </div>
      </div>
      {message && (
        <div className="row justify-content-center pt-4">
          <p className="text-muted font-italic justify-content-center">
            {message}
          </p>
        </div>
      )}
      {searched && (
        <div className="search-section">
          <div className="container">
            <div className="row">{searchedBlogs(results)}</div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Search;
