import { Link } from "react-router-dom";
import Hulk from "../img/hulk.png";
import entryComics from "../img/entry-comics.png";
import entryCharacters from "../img/entry-characters.png";
import arrowRight from "../img/Groupe 1.svg";

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
      <div className="entries">
        <Link to="/characters" style={{ textDecoration: "none" }}>
          <div className="entry-characters">
            <span>Characters</span>
            <p>More than 1500 entries</p>
            <img
              className="arrow"
              alt="go to characters"
              src={arrowRight}
            ></img>

            <img src={entryCharacters} alt="" />
          </div>
        </Link>

        <Link to="/comics" style={{ textDecoration: "none" }}>
          <div className="entry-comics">
            <span>Comics</span>
            <p>More than 4500 entries</p>
            <img className="arrow" alt="go to comics" src={arrowRight}></img>

            <img src={entryComics} alt="" />
          </div>
        </Link>
      </div>
      <img className="hero-home" src={Hulk} alt="Hulk"></img>
    </div>
  );
};

export default Home;
