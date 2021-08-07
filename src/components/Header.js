import { Link } from "react-router-dom";
import logout from "../img/logout.svg";

const Header = ({
  setPanelType,
  usernameHeader,
  setUsernameHeader,
  username,
  userToken,
  setUserToken,
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
                if (userToken) {
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
        {userToken ? (
          <div
            className="logout"
            onClick={() => {
              setUserToken(null);
            }}
          >
            <p>
              {usernameHeader} | <span>Logout</span>
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
