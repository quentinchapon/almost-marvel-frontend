import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
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
              <li>About</li>
            </Link>
            <Link to="/comics" style={{ textDecoration: "none" }}>
              <li>Cookies</li>
            </Link>

            <li>Privacy policy</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
