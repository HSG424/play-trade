import { Fragment, useState } from "react";
import "./Layout.scss";
import Navigation from "../Navigation/Navigation";

const Layout = (props) => {
  const [showNav, setShowNav] = useState(false);

  const naviShowHandler = () => {
    setShowNav((prevState) => !prevState);
  };

  return (
    <Fragment>
      {" "}
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-md-3 col-lg-2 me-0 px-3 header-logo"
          href="#"
        >
          <span className="header-logo-text">
            Play<span className="blue-text">Trade</span>
          </span>
        </a>

        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={naviShowHandler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search for multiple stocks, ETFs, and mutual funds by symbol (separate by comma or space)"
          aria-label="Search"
        />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <button type="button" className="btn btn-primary search-button">
              Search
            </button>
          </div>
        </div>
      </header>
      <div className="container-fluid">
        <div className="row">
          <Navigation showNav={showNav} />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div
              className="
          d-flex
          justify-content-between
          flex-wrap flex-md-nowrap
          align-items-center
          pt-3
          pb-2
          mb-3
          border-bottom
        "
            >
              <h1 className="h2">{props.title}</h1>
            </div>

            {props.children}
          </main>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
