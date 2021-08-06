import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
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
    </header>
  );
};

export default Header;
