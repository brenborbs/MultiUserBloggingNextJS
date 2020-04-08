import Link from "next/link";
import renderHTML from "react-render-html";
import { useState, useEffect } from "react";
import { listSearch } from "../../actions/blog";
import NewCard from "./NewCard";

const Search = () => {
  const [values, setValues] = useState({
    search: undefined,
    results: [],
    searched: false,
    message: "",
  });

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
            <h1 className="text-light text-uppercase font-weight-bold">
              <strong>Estoryahi ko!</strong>
            </h1>
            <p className="lead text-light">
              Sabta kuno if sakto ba ko or dili?
            </p>
            {searchForm()}
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
