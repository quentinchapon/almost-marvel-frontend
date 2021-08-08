import { Link } from "react-router-dom";
import Hulk from "../img/hulk_opt.png";
import Captain from "../img/captain_opt.png";
import Widow from "../img/widow.png";
import Quicksilver from "../img/quicksilver.png";
import Starlord from "../img/starlord.png";

import entryComics from "../img/entry-comics.jpg";
import entryCharacters from "../img/entry-characters.jpg";
import arrowRight from "../img/arrow-right.png";

const Home = () => {
  const heroImg = [Hulk, Captain, Widow, Quicksilver, Starlord];
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
      <img
        className="hero-home"
        src={heroImg[Math.floor(Math.random() * 5)]}
        alt="Hero"
      ></img>
    </div>
  );
};

export default Home;
