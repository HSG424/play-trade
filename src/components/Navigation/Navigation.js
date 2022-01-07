import "./Navigation.scss";
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

const Navigation = (props) => {
  return (
    <nav
      id="sidebarMenu"
      className={`col-md-3 col-lg-2 d-md-block bg-light sidebar collapse ${
        props.showNav ? "show" : ""
      }`}
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <Home className="feather" />
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Briefcase className="feather" />
              Portfolio
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
  );
};

export default Navigation;
