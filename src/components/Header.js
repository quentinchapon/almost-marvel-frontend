import { Link } from "react-router-dom";
import logout from "../img/logout.svg";
import Cookies from "js-cookie";

const Header = ({
  setToken,
  setPanelType,
  username,
  token,
  setModalType,
  setModalVisibility,
  setPanelVisibility,
}) => {
  return (
    <header>
      <div className="header-left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo">
            <span>
              ALM<span>O</span>ST
              <br />
              MARVEL
            </span>
          </div>
        </Link>
        <nav>
          <ul>
            <Link to="/characters" style={{ textDecoration: "none" }}>
              <li
                onClick={() => {
                  setPanelType("item");
                }}
              >
                Characters
              </li>
            </Link>
            <Link to="/comics" style={{ textDecoration: "none" }}>
              <li
                onClick={() => {
                  setPanelType("item");
                }}
              >
                Comics
              </li>
            </Link>

            <li
              onClick={() => {
                if (token) {
                  setPanelType("collection");
                  setPanelVisibility(true);
                } else {
                  setModalVisibility(true);
                  setModalType("signin");
                }
              }}
            >
              My collection
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        {token === true ? (
          <div
            className="logout"
            onClick={() => {
              Cookies.remove("username");
              Cookies.remove("token");
              Cookies.remove("userID");
              setToken(false);
            }}
          >
            <p>
              {Cookies.get("username")} | <span>Logout</span>
            </p>
            <img src={logout} alt="logout"></img>
          </div>
        ) : (
          <ul>
            <li
              onClick={() => {
                setModalType("signup");
                setModalVisibility(true);
              }}
            >
              Sign Up
            </li>

            <li
              onClick={() => {
                setModalType("signin");
                setModalVisibility(true);
              }}
            >
              Sign In
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
