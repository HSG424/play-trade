import { Fragment, useState } from "react";
import "./Dashboard.scss";
import {
  Home,
  Briefcase,
  Search,
  Edit3,
  TrendingUp,
  Layers,
  Info,
  Settings,
  LogOut,
} from "react-feather";

import PieChart from "./PieChart";

const Dashboard = () => {
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
          <nav
            id="sidebarMenu"
            className={`col-md-3 col-lg-2 d-md-block bg-light sidebar collapse ${
              showNav && "show"
            }`}
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <Home className="feather" />
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Briefcase className="feather" />
                    Your Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Search className="feather" />
                    Find | Buy Stock
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Edit3 className="feather" />
                    Insights
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <TrendingUp className="feather" />
                    Hot | Trending
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Layers className="feather" />
                    Precious Metals
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Info className="feather" />
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Settings className="feather" />
                    Settings
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <LogOut className="feather" />
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </nav>

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
              <h1 className="h2">Dashboard</h1>
            </div>

            <h3 className="asset-h3">Asset Breakdown</h3>
            <div className="pie-width">
              <PieChart />
            </div>

            <h3 className="asset-h3-lower">Your Assets</h3>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Name</th>
                    <th scope="col">% of Portfolio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Stock</td>
                    <td>Apple</td>
                    <td>26%</td>
                  </tr>
                  <tr>
                    <td>Stock</td>
                    <td>Coca-Cola</td>
                    <td>24%</td>
                  </tr>
                  <tr>
                    <td>Stock</td>
                    <td>Volkswagen</td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>Stock</td>
                    <td>Amazon</td>
                    <td>5%</td>
                  </tr>
                  <tr>
                    <td>EFT</td>
                    <td>Vanguard Energy</td>
                    <td>4%</td>
                  </tr>
                  <tr>
                    <td>EFT</td>
                    <td>iShares U.S. Energy</td>
                    <td>4%</td>
                  </tr>
                  <tr>
                    <td>Mutual Fund</td>
                    <td>Invesco</td>
                    <td>15%</td>
                  </tr>
                  <tr>
                    <td>Precious Metal</td>
                    <td>Gold</td>
                    <td>3%</td>
                  </tr>
                  <tr>
                    <td>Precious Metal</td>
                    <td>Silver</td>
                    <td>12%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
