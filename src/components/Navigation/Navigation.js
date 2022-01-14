import { useContext } from "react";
import AuthContext from "../../store/auth-context";
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
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
  };

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
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/"
              exact={true}
            >
              <Home className="feather" />
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/portfolio"
            >
              <Briefcase className="feather" />
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/search">
              <Search className="feather" />
              Find | Buy Stock
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/insights"
            >
              <Edit3 className="feather" />
              Insights
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/trending"
            >
              <TrendingUp className="feather" />
              Hot | Trending
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/precious-metals"
            >
              <Layers className="feather" />
              Precious Metals
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/about">
              <Info className="feather" />
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/settings"
            >
              <Settings className="feather" />
              Settings
            </NavLink>
          </li>
          <li className="nav-item logout" onClick={logoutHandler}>
            <LogOut className="feather" />
            Logout
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
