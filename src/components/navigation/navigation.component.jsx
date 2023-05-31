import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import UserContext from "../../context/user-context";
import { ReactComponent as Logo } from "../../assets/hwsymleo.svg";
import "./navigation.style.scss";
import { signUserOut } from "../../utils/firebase/firebase.utils";
export default function Navigation() {
  const { User, setUser } = useContext(UserContext);
  async function signOutHandler() {
    await signUserOut();
    setUser(null);
  }
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
          {User ? (
            <span onClick={signOutHandler} className="nav-link">
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
