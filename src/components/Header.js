import { Link } from "react-router-dom";

const Header = ({ setModalType, setModalVisibility }) => {
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
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Home</li>
            </Link>
            <Link to="/characters" style={{ textDecoration: "none" }}>
              <li>Characters</li>
            </Link>
            <Link to="/comics" style={{ textDecoration: "none" }}>
              <li>Comics</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="header-right">
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
      </div>
    </header>
  );
};

export default Header;
