import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Logo } from "../../assets/hwsymleo.svg";
import "./navigation.style.scss";
export default function Navigation() {
  return (
    <Fragment>
      <div className="navigation ">
        <div className="logo-container">
          <Link to="/">
            <Logo className="logo" />
          </Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/store">
            STORE
          </Link>
          <Link className="nav-link" to="/signIn">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
