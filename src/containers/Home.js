import { Link } from "react-router-dom";
import Hulk from "../img/hulk.png";
const Home = () => {
  return (
    <div className="wrapper">
      <h1 className="h1-home">
        ALM<span>O</span>ST
        <br /> MARVEL
      </h1>
      <p className="p-home">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <Link to="/characters">
        {" "}
        <button>Browse by characters</button>
      </Link>
      <Link to="/comics">
        <button>Browse by comics</button>
      </Link>
      <img className="hero-home" src={Hulk} alt="Hulk"></img>
    </div>
  );
};

export default Home;
